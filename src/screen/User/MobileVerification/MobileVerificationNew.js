import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import DeviceInfo from "react-native-device-info";
import LinearGradient from "react-native-linear-gradient";

import { Image, Container, Content } from "@src/component/Basic";
import { Button, TextInput } from "@src/component/Form";
import Support from "@src/component/Support";
import { URLS } from "@src/config/url";
import { applyComponentFeatures } from "@src/utility/core";
import { __ } from "@src/utility/translation";
import http from "@src/utility/http";
import { navigateReset } from "@src/navigation";
import { COLOR, FAMILY, SIZE } from "@src/theme/typography";
import { initiateUserSession } from "@src/helper/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const codeLength = 4;
const otpField = "otp";

class MobileVerificationNew extends Component {
  constructor(props) {
    super(props);

    const otpCodes = [];
    otpCodes.length = codeLength;

    this.state = {
      verified: 0,
      otpCodes: otpCodes.fill(""),
      mobilenumber: this.props.route.params.mobilenumber,
      country: this.props.route.params.country,
      experyTime: this.props.route.params.experyTime,
      resendTime: this.props.route.params.resendTime,
      showResend: false,
    };

    applyComponentFeatures(this);

    this.onChangeOtpCode = this.onChangeOtpCode.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.enableResendTimeout = this.enableResendTimeout.bind(this);
    this.resendOTP = this.resendOTP.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderCodeInput = this.renderCodeInput.bind(this);
    this.renderResendLink = this.renderResendLink.bind(this);

    this.references = {
      inputs: {},
    };
  }

  componentDidMount() {
    this.enableResendTimeout();
  }

  async onChangeOtpCode(v, i) {
    let s = (v || "").toString();
    s = s.toString().charAt(s.length - 1);
    const next = i + 1;
    const otpCodes = this.state.otpCodes || [];
    if (otpCodes[i] != s) {
      otpCodes[i] = s;
      await this.promisedSetState({
        otpCodes,
      });
    }
    if (s.length === 1 && i < codeLength - 1) {
      this.references.inputs["otpCode" + next].focus();
    }
  }

  onKeyPress(e, i) {
    if (e.nativeEvent.key === "Backspace" && i !== 0) {
      this.references.inputs["otpCode" + (i - 1)].focus();
    }
  }

  enableResendTimeout() {
    if (this.timeoutResendLink) {
      clearTimeout(this.timeoutResendLink);
    }
    this.timeoutResendLink = setTimeout(() => {
      this.setState({
        showResend: true,
      });
    }, 10000);
  }

  async resendOTP() {
    let cb = null;
    await this.promisedSetState({
      showResend: false,
    });
    const url = URLS.USER_LOGIN_RESEND;
    const values = { mobile: this.state.mobilenumber };
    values.ipaddress = await DeviceInfo.getDeviceName();
    await Support.showLoading();
    try {
      const r = (await http.post(url, values)).data;

      await Support.showSuccess({
        layout: "toast",
        message: __('Successfully sent'),
        hideDelay: 2500,
      });

      cb = this.enableResendTimeout();
    } catch (e) {
      await Support.showServerError(e);
    }
    await Support.hideLoading();
    cb && cb();
  }

  async validate(values) {
    const isEmpty = (key) => {
      return !(typeof values[key] !== "undefined" && values[key] !== "");
    };
    const errors = [];
    if (isEmpty(otpField)) {
      errors.push(__('Please enter your verification code'));
    } else if (!values[otpField].match(/^\d{4}$/)) {
      errors.push(__('Please enter your 4 digit code'));
    }

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }
  }

  async onSubmit() {
    if (this.state.verified === 1) {
      return;
    }

    const cb = null;
    await Support.showLoading();
    try {
      const values = { mobilenumber: this.state.mobilenumber };
      values[otpField] = this.state.otpCodes.join("") ?? "";

      await this.validate(values);

      const code = this.state.otpCodes.join("") ?? "";

      const rawMobile = this.state.mobilenumber;
      const mobilenumber = rawMobile.startsWith("+")
        ? rawMobile
        : "+" + (this.state.country?.phone_code ?? "") + rawMobile;
      const otp = code;
      const ipaddress = await DeviceInfo.getDeviceName();
      const result = (
        await http.post("/getSubscriberDetails/verify", {
          mobilenumber,
          otp,
          ipaddress,
        })
      ).data;

      const profileStatus = result?.profileStatus;
      const token = result?.userToken?.tokenrecords;

      if (!token) {
        await Support.showError(result);
      } else {
        await this.promisedSetState({
          verified: 1,
        });

        const isLoggedIn = await initiateUserSession(token, profileStatus);
        if (isLoggedIn) {
          const email = await AsyncStorage.getItem("emailId");
          await Support.showSuccess({
            title: __("Thank you"),
            message: __("OTP Verified Successfully."),
            onHide: async () => {
              navigateReset("UserLoginTerms");
            },
            hideDelay: 2500,
          });
        }
      }
    } catch (e) {
      console.log("MobileVerificationNew::onSubmit::error", e);
      await this.promisedSetState({
        verified: 2,
      });
      await Support.showServerError(e);
    }
    await Support.hideLoading();
    if (cb) {
      setTimeout(cb, 1000);
    }
  }

  renderCodeInput() {
    return this.state.otpCodes.map((value, i) => (
      <View key={i} style={styles.otpInputWrap}>
        <TextInput
          key={i}
          autoCapitalize="none"
          blurOnSubmit={false}
          editable={this.state.verified !== 1}
          keyboardType="numeric"
          maxLength={1}
          placeholder=""
          returnKeyType="next"
          selectTextOnFocus
          style={styles.otpInput}
          value={(value || "").toString()}
          onChangeText={(v) => this.onChangeOtpCode(v, i)}
          onKeyPress={(e) => this.onKeyPress(e, i)}
          ref={(r) => (this.references.inputs["otpCode" + i] = r)}
        />
      </View>
    ));
  }

  renderResendLink() {
    if (!this.state.showResend) {
      return null;
    }
    return (
      <Button style={styles.resendBtn} onPress={this.resendOTP}>
        <Text style={styles.resendBtnText}>
          {__("Don't receive the OTP? Resend OTP")}
        </Text>
      </Button>
    );
  }

  render() {
    const gradientColors = Array.isArray(this.props.gradientColors) && this.props.gradientColors.length ? this.props.gradientColors : ["#0D0B2E", "#1A0E5C", "#2C1670"];
    const primaryColor = this.props.primaryColor || "#6B35D9";

    return (
      <LinearGradient
        colors={gradientColors}
        style={styles.root}
      >
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        {/* ── Top: Welcome section ── */}
        <View style={styles.topSection}>
          <Text style={styles.welcomeText}>{__("Verify OTP")}</Text>
        </View>

        {/* ── Bottom: white verification card ── */}
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <ScrollView
              contentContainerStyle={styles.cardContent}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.verifyTitle}>
                {__("Enter 4 Digits Code")}
              </Text>

              <Text style={styles.verifyDesc}>
                {__('Enter 4 digit verification code sent to your Mobile Number')}{" "}
                {this.state.mobilenumber}
              </Text>

              {/* OTP Input Fields */}
              <View style={styles.otpRow}>{this.renderCodeInput()}</View>

              <Text style={styles.otpNote}>
                {__('We will send you one time password(OTP)')}
              </Text>

              {this.renderResendLink(primaryColor)}

              <Button style={[styles.verifyBtn, { backgroundColor: COLOR.PRIMARY }]} onPress={this.onSubmit}>
                <Text style={styles.verifyBtnText}>{__("Verify")}</Text>
              </Button>
            </ScrollView>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = {
  root: {
    flex: 1,
    flexDirection: "column",
  },

  // Top section
  topSection: {
    flex: 0.25,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  welcomeText: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_28,
    color: "#FFFFFF",
  },

  // Card wrapper with margins to show gradient behind
  cardWrapper: {
    flex: 0.75,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    // flex: 1,
    backgroundColor: "#F4F5F7",
    borderRadius: 30,
    overflow: "hidden",
  },
  cardContent: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 24,
  },

  // Verify form
  verifyTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_22,
    color: COLOR.BLACK,
    marginBottom: 8,
  },
  verifyDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    marginBottom: 24,
    lineHeight: 20,
  },

  // OTP Input row
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInputWrap: {
    flex: 1,
    marginHorizontal: 6,
  },
  otpInput: {
    flex: 1,
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_24,
    color: COLOR.BLACK,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#E8E8E8",
    borderRadius: 12,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
  },

  // OTP note
  otpNote: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 16,
    textAlign: "center",
  },

  // Resend button
  resendBtn: {
    marginBottom: 20,
    paddingVertical: 12,
  },
  resendBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    textAlign: "center",
  },

  // Verify button
  verifyBtn: {
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 12,
  },
  verifyBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: "#FFFFFF",
  },
};

const mapStateToProps = (state) => {
  const designTokens = state.brand?.designTokens;
  console.log("APP_DETAILS:", designTokens);
  return {
    appLogo: designTokens?.APP_DETAILS?.APP_LOGO || null,
    gradientColors: designTokens?.GRADIENT_COLOURS ? Object.values(designTokens.GRADIENT_COLOURS) : null,
    primaryColor: designTokens?.COLORS?.PRIMARY || null,
  };
};

export default connect(mapStateToProps)(MobileVerificationNew);
