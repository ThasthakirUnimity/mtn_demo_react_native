import React, { Component, createRef } from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import DeviceInfo from "react-native-device-info";
import { Formik } from "formik";
import LinearGradient from "react-native-linear-gradient";

import { Image } from "@src/component/Basic";
import { Button, Picker, TextInput } from "@src/component/Form";
import Support from "@src/component/Support";
import { URLS } from "@src/config/url";
import { applyComponentFeatures } from "@src/utility/core";
import { __ } from "@src/utility/translation";
import http from "@src/utility/http";
import { navigate, navigateReset } from "@src/navigation";
import {
  logClickEvent,
  logErrorEvent,
  logSuccessEvent,
} from "@src/utility/analytics";
import { initiateUserSession } from "@src/helper/user";
import auth0 from "@src/utility/auth0";
import { COLOR, FAMILY, SIZE } from "@src/theme/typography";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const CAROUSEL_ITEMS = [
  {
    id: "1",
    image: require("@asset/images/carousel_1.png"),
    title: "RECHARGE &\nPAY BILLS",
  },
  {
    id: "2",
    image: require("@asset/images/carousel_2.png"),
    title: "FAST & SECURE\nPAYMENTS",
  },
  {
    id: "3",
    image: require("@asset/images/carousel_3.png"),
    title: "EARN CASHBACK\nREWARDS",
  },
];

class LoginNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      activeSlide: 0,
      initialValues: {},
    };

    applyComponentFeatures(this);

    this.fetchCountries = this.fetchCountries.bind(this);
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit1 = this.onSubmit1.bind(this);
    this.openSocial = this.openSocial.bind(this);
    this.openGoogle = this.openGoogle.bind(this);
    this.openFacebook = this.openFacebook.bind(this);
    this.openApple = this.openApple.bind(this);
    this.submitSocialLogin = this.submitSocialLogin.bind(this);
    this.renderCountryLabel = this.renderCountryLabel.bind(this);
    this.renderCountryListItem = this.renderCountryListItem.bind(this);
    this.renderCarouselItem = this.renderCarouselItem.bind(this);
    this.onCarouselScroll = this.onCarouselScroll.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderFormContainer = this.renderFormContainer.bind(this);

    this.refForm = createRef();
  }

  async componentDidMount() {
    await this.fetchCountries();
  }

  // ─── Business Logic (same as Login/index.js) ─────────────────────────────

  async fetchCountries() {
    await Support.showLoading();
    try {
      const r = (await http.get(URLS.COUNTRIES)).data;
      let country = null;
      const countries = r.countryList.map((r) => ({
        value: r.id.toString(),
        label: "+" + r.phone_code,
        phone_code: r.phone_code,
        flag: r.flag,
      }));
      if (countries.length) {
        country = countries[0].value;
      }
      if (this.refForm.current) {
        country && this.refForm.current.setFieldValue("country", country);
      }
      await this.promisedSetState({ countries, country });
    } catch (e) {}
    await Support.hideLoading();
  }

  validate(values) {
    const isEmpty = (key) =>
      !(typeof values[key] !== "undefined" && values[key] !== "");
    const errors = [];
    if (isEmpty("country")) errors.push("Please select a country");
    if (isEmpty("mobilenumber")) {
      errors.push("Please enter your mobile number");
    } else if (!values.mobilenumber.match(/^\d{10}$/)) {
      errors.push("Please enter a valid mobile number");
    }
    if (errors.length) throw new Error(errors.join("\n"));
  }

  async onSubmit(values) {
    logClickEvent("LoginSendOTP");
    await Support.showLoading();
    try {
      this.validate(values);
      const country = this.state.countries.find(
        (r) => r.value == values.country
      );
      await auth0.auth.passwordlessWithSMS({
        phoneNumber: "+" + country.phone_code + values.mobilenumber,
      });
      logSuccessEvent("LoginSendOTP");
      await Support.showSuccess({
        message: "",
        onHide: () => {
          navigate("UserMobileVerification", {
            country,
            mobilenumber: values.mobilenumber,
            experyTime: 60000,
            resendTime: 60000,
          });
        },
        hideDelay: 2500,
      });
    } catch (e) {
      logErrorEvent("LoginSendOTP");
      await Support.showServerError(e);
    }
    await Support.hideLoading();
  }

  async onSubmit1(values) {
    logClickEvent("LoginSendOTP");
    try {
      const countries = Array.isArray(this.state.countries)
        ? this.state.countries
        : [];
      const country = countries.find((r) => r.value == values.country);
      const mobilenumber =
        "+" + (country?.phone_code ?? "") + values.mobilenumber;

      values.ipaddress = await DeviceInfo.getDeviceName();
      values.mobilenumber = mobilenumber;
      const result = (await http.post(URLS.USER_LOGIN, values)).data;

      logSuccessEvent("LoginSendOTP");
      await Support.showSuccess({
        message: "",
        onHide: () => {
          navigate("UserMobileVerification", {
            mobilenumber: values.mobilenumber,
            experyTime: parseInt(result.ExperyTime, 10) * 1000 || 1800,
            resendTime: parseInt(result.enableResend1, 10) * 1000 || 1800,
          });
        },
        hideDelay: 2500,
      });
    } catch (e) {
      logErrorEvent("LoginSendOTP");
      if (e?.response?.data?.passwordStatus == "2") {
        this.onSubmit(values);
        return;
      }
      await Support.showServerError(e);
    }
    await Support.hideLoading();
  }

  async openSocial(connection) {
    await Support.showLoading();
    auth0.webAuth
      .authorize({ scope: "openid email profile", connection })
      .then(async (r) => {
        await Support.hideLoading();
        setTimeout(() => this.submitSocialLogin(r), 1);
      })
      .catch(async (e) => {
        await Support.hideLoading();
        if (e?.error_description) {
          Support.showError({ layout: "toast", message: e.error_description });
        }
      });
  }

  async openGoogle() {
    this.openSocial("google-oauth2");
  }
  async openFacebook() {
    this.openSocial("facebook");
  }
  async openApple() {
    this.openSocial("apple");
  }

  async submitSocialLogin(r) {
    await Support.showLoading();
    try {
      if (r.idToken) {
        const token = r.idToken;
        const result = (
          await http.post("/getSubscriberDetails/verifyToken", { token })
        ).data;
        const { profileStatus } = result;
        await this.promisedSetState({ verified: 1 });
        const isLoggedIn = await initiateUserSession(token, profileStatus);
        if (isLoggedIn) {
          await Support.showSuccess({
            title: __("Thank you"),
            message: __("Successfully loggedin."),
            onHide: async () => navigateReset("UserLoginTerms"),
            hideDelay: 2500,
          });
        }
      }
    } catch (e) {}
    await Support.hideLoading();
  }

  // ─── Carousel ────────────────────────────────────────────────────────────

  onCarouselScroll(e) {
    const index = Math.round(
      e.nativeEvent.contentOffset.x / SCREEN_WIDTH
    );
    if (index !== this.state.activeSlide) {
      this.setState({ activeSlide: index });
    }
  }

  renderCarouselItem({ item }) {
    return (
      <View style={styles.slide}>
        {/* Image: right-aligned, top */}
        <View style={styles.slideImageWrap}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.slideImage}
          />
        </View>
        {/* Text: below image, left-aligned from centre */}
        <View style={styles.slideTextWrap}>
          <Text style={styles.slideTitle}>{item.title}</Text>
        </View>
      </View>
    );
  }

  renderDots(carouselItems = CAROUSEL_ITEMS) {
    return (
      <View style={styles.dotsRow}>
        {carouselItems.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === this.state.activeSlide && styles.dotActive]}
          />
        ))}
      </View>
    );
  }

  // ─── Country picker renderers ─────────────────────────────────────────────

  renderCountryLabel(item) {
    return (
      <>
        <Image
          source={{ uri: item.flag }}
          resizeMode="contain"
          style={styles.flagImg}
        />
        <Text style={styles.countryCode}>+{item.phone_code}</Text>
        <Text style={styles.chevron}>{"  ⌄"}</Text>
      </>
    );
  }

  renderCountryListItem(item) {
    return (
      <>
        <Image
          source={{ uri: item.flag }}
          resizeMode="contain"
          style={styles.flagImg}
        />
        <Text style={styles.countryCode}>{item.label}</Text>
      </>
    );
  }

  // ─── Form ─────────────────────────────────────────────────────────────────

  renderForm({ values, handleChange, handleBlur, submitForm }) {
    const primaryColor = this.props.primaryColor || "#6B35D9";
    
    return (
      <View>
        <Text style={styles.loginTitle}>{__("Login")}</Text>
        <Text style={styles.loginDesc}>
          {__("Enter your phone number to log in.")}
        </Text>

        {/* Country + Phone input */}
        <View style={styles.inputRow}>
          <View style={styles.pickerWrap}>
            <Picker
              items={this.state.countries}
              value={values.country}
              buttonStyle={{ flexDirection: "row", alignItems: "center" }}
              optionInnerStyle={{ flexDirection: "row", alignItems: "center" }}
              onChange={handleChange("country")}
              renderItem={this.renderCountryListItem}
              renderLabel={this.renderCountryLabel}
            />
          </View>
          <View style={styles.inputDivider} />
          <TextInput
            placeholder={__("Enter number")}
            value={values.mobilenumber}
            keyboardType="numeric"
            onChangeText={handleChange("mobilenumber")}
            onBlur={handleBlur("mobilenumber")}
            style={styles.phoneInput}
          />
        </View>

        <Text style={styles.otpNote}>
          {__("We will send you a one-time password (OTP)")}
        </Text>

        <Button style={[styles.sendBtn, { backgroundColor: primaryColor }]} onPress={submitForm}>
          <Text style={styles.sendBtnText}>{__("Send OTP")}</Text>
        </Button>

        {/* OR */}
      
        <Text style={styles.continueWith}>{__("OR Continue with")}</Text>

        {/* Social login */}
        <View style={styles.socialRow}>
          <Button style={styles.socialBtn} onPress={this.openGoogle}>
            <Image
              source={require("@asset/icons/btn-google.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </Button>
          <Button style={styles.socialBtn} onPress={this.openFacebook}>
            <Image
              source={require("@asset/icons/btn-facebook.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </Button>
          <Button style={styles.socialBtn} onPress={this.openApple}>
            <Image
              source={require("@asset/icons/btn-apple.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </Button>
        </View>
      </View>
    );
  }

  renderFormContainer() {
    return (
      <Formik
        innerRef={this.refForm}
        initialValues={this.state.initialValues}
        onSubmit={this.onSubmit1}
      >
        {this.renderForm}
      </Formik>
    );
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  render() {
    const carouselItems = this.props.loginCarousel || CAROUSEL_ITEMS;
    const gradientColors = this.props.gradientColors || ["#0D0B2E", "#1A0E5C", "#2C1670"];
    
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

        {/* ── Top: carousel section ── */}
        <View style={styles.carouselSection}>
          <Text style={styles.welcome}>{__("Welcome")}</Text>

          <FlatList
            data={carouselItems}
            keyExtractor={(item) => item.id}
            renderItem={this.renderCarouselItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={this.onCarouselScroll}
            scrollEventThrottle={16}
            style={styles.carousel}
          />

          {this.renderDots(carouselItems)}
        </View>

        {/* ── Bottom: white login card ── */}
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <ScrollView
              contentContainerStyle={styles.cardContent}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {this.renderFormContainer()}
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

  // Carousel section
  carouselSection: {
    flex: 0.50,
    paddingTop: 50,
    overflow: "visible",
  },
  welcome: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_22,
    color: "#FFFFFF",
    marginLeft: 24,
    zIndex: 1,
  },
  carousel: {
    flex: 1,
    zIndex: 2,
    marginTop: -20,
    
  },
  // Slide: vertical layout — text top, image bottom-right
  slide: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 0.7,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop:20
  },
  // Image: right-aligned, pushed to bottom, touches right edge
  slideImageWrap: {
    width: SCREEN_WIDTH,
    alignItems: "flex-end",
    paddingRight: 0,

  },
  slideImage: {
    width: SCREEN_WIDTH * 0.75,
    height: SCREEN_WIDTH * 0.58,
    marginRight: -60,
    zIndex: 1,
  },
  // Text: below image, center-aligned with natural wrapping
  slideTextWrap: {
    paddingHorizontal: 24,
    marginTop: 12,
    alignSelf: "center",
  },
  slideTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_18,
    color: "#FFFFFF",
    textAlign: "center",
    letterSpacing: 0.5,
    maxWidth: SCREEN_WIDTH * 0.85,
  },

  // Dot indicators
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: -8,
    marginBottom: 30,

  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.35)",
    marginHorizontal: 4,
  },
  dotActive: {
    width: 22,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },

  // Card wrapper with margins to show gradient behind
  cardWrapper: {
    flex: 0.48,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    borderRadius: 30,
    overflow: "hidden",
  },
  cardContent: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 24,
  },

  // Login form
  loginTitle: {
    fontFamily: FAMILY.MTN_BOLD,
    fontSize: SIZE.SIZE_22,
    color: COLOR.BLACK,
    marginBottom: 4,
  },
  loginDesc: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    marginBottom: 18,
  },

  // Phone input row
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 3,
  },
  pickerWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputDivider: {
    width: 1,
    height: 20,
    backgroundColor: COLOR.SMOKE_DARK,
    marginHorizontal: 10,
  },
  phoneInput: {
    flex: 1,
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BLACK,
    paddingVertical: 12,
  },
  flagImg: {
    width: 22,
    height: 22,
    marginRight: 6,
  },
  countryCode: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.DARK,
  },
  chevron: {
    fontFamily: FAMILY.MTN_REGULAR,
    fontSize: SIZE.SIZE_12,
    color: COLOR.DARK,
  },

  // OTP note
  otpNote: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_12,
    color: COLOR.GREY_LIGHT,
    marginBottom: 20,
    textAlign: "center",
  },

  // Send OTP button
  sendBtn: {
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 18,
  },
  sendBtnText: {
    fontFamily: FAMILY.MTN_MEDIUM,
    fontSize: SIZE.SIZE_16,
    color: "#FFFFFF",
  },

  // OR / Social
  orRow: {
    alignItems: "center",
    marginBottom: 6,
  },
  orText: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT,
  },
  continueWith: {
    fontFamily: FAMILY.MTN_LIGHT,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY_LIGHT,
    textAlign: "center",
    marginBottom: 14,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialBtn: {
    backgroundColor: "#FFFFFF",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
};

const mapStateToProps = (state) => {
  const designTokens = state.brand?.designTokens;
  console.log("APP_DETAILS:", designTokens);
  return {
    appLogo: designTokens?.APP_DETAILS?.APP_LOGO || null,
    loginCarousel: designTokens?.LOGIN_CAROUSEL || null,
    gradientColors: designTokens?.GRADIENT_COLOURS || null,
    primaryColor: designTokens?.COLORS?.PRIMARY || null,
  };
};

export default connect(mapStateToProps)(LoginNew);
