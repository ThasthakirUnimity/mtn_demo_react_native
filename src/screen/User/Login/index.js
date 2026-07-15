import React, { Component, createRef } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import DeviceInfo from "react-native-device-info";
import { Formik } from "formik";

import { Container, Content, Image } from "@src/component/Basic";
import { Button, Picker, TextInput } from "@src/component/Form";
import Support from "@src/component/Support";
import { URLS } from "@src/config/url";
import { applyComponentFeatures } from "@src/utility/core";
import { LightStatusBar } from "@src/component/StatusBar";
import { __ } from "@src/utility/translation";
import http from "@src/utility/http";


import styles from "./styles";
import theme from "@src/theme/styles";
import { navigate, navigateCurrent, navigateReset } from "@src/navigation";
import {
  logClickEvent,
  logErrorEvent,
  logSuccessEvent,
} from "@src/utility/analytics";
import { initiateUserSession } from "@src/helper/user";
import auth0 from "@src/utility/auth0";

import { NativeModules } from "react-native";

// if (__DEV__) {
//   NativeModules.DevSettings.setIsDebuggingRemotely(true);
// }
//debugger; 
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      initialValues: {
        // mobilenumber: '7305510550'
        // mobilenumber: '9062058586'
        // mobilenumber: '7305510551'
        // mobilenumber: '9062058586'
        // mobilenumber: '9876543211'
        // mobilenumber: '9677221163'
        // mobilenumber: '9677221184'
        // mobilenumber: '9940828655'
      },
    };

    applyComponentFeatures(this);

    this.changeScreen = this.changeScreen.bind(this)

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
    this.renderForm = this.renderForm.bind(this);
    this.renderFormContainer = this.renderFormContainer.bind(this);

    this.refForm = createRef();
  }

  async componentDidMount() {
    await this.fetchCountries();
  }

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
      await this.promisedSetState({
        countries,
        country,
      });
    } catch (e) {}
    await Support.hideLoading();
  }

  validate(values) {
    const isEmpty = (key) => {
      return !(typeof values[key] !== "undefined" && values[key] !== "");
    };
    const errors = [];
    if (isEmpty("country")) {
      errors.push("Please select a country");
    }
    if (isEmpty("mobilenumber")) {
      errors.push("Please enter your mobile number");
    } else if (!values.mobilenumber.match(/^\d{10}$/)) {
      errors.push("Please enter a valid mobile number");
    }

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }
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
    console.log('------------------', this?.state?.countries)

    // await Support.showLoading();
    try {
      // await this.validate(values);

      // values.ipaddress = await DeviceInfo.getDeviceName();
      const countries = Array.isArray(this.state.countries) ? this.state.countries : [];
       const country = countries.find(
        (r) => r.value == values.country
      );
      console.log("country -------------", countries )
      const mobilenumber = '+' + (country?.phone_code ?? '') + values.mobilenumber;

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
      .authorize({
        scope: "openid email profile",
        connection,
      })
      .then(async (r) => {
        await Support.hideLoading();
        setTimeout(() => this.submitSocialLogin(r), 1);
      })
      .catch(async (e) => {
        await Support.hideLoading();
        if (e?.error_description) {
          Support.showError({
            layout: "toast",
            message: e.error_description,
          });
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
    console.log(r);
    await Support.showLoading();
    try {
      if (r.idToken) {
        const token = r.idToken;
        const result = (
          await http.post("/getSubscriberDetails/verifyToken", {
            token,
          })
        ).data;

        const { profileStatus } = result;

        await this.promisedSetState({
          verified: 1,
        });

        const isLoggedIn = await initiateUserSession(token, profileStatus);
        if (isLoggedIn) {
          await Support.showSuccess({
            title: __("Thank you"),
            message: __("Successfully loggedin."),
            onHide: async () => {
              navigateReset("UserLoginTerms");
            },
            hideDelay: 2500,
          });
        }
      }
    } catch (e) {}
    await Support.hideLoading();
  }

  renderCountryLabel(item) {
    return (
      <>
        <Image
          source={{ uri: item.flag }}
          resizeMode="contain"
          style={styles.flagImg}
        />
        <Text
          editable={false}
          placeholder=""
          placeholderTextColor="rgba(0, 0, 0, 1)"
          keyboardType="phone-pad"
          maxLength={5}
          style={styles.formNumbInput}
        >
          +{item.phone_code}
        </Text>
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
        <Text
          placeholder=""
          placeholderTextColor="rgba(0, 0, 0, 1)"
          keyboardType="phone-pad"
          maxLength={5}
          style={styles.formNumbInput}
        >
          {item.label}
        </Text>
      </>
    );
  }



  renderForm({ values, handleChange, handleBlur, submitForm }) {
    return (
      <View style={styles.loginForm}>
        <View style={styles.loginRow}>
          <Text style={styles.loginDesc}>
            {__("Enter your phone number to log in")}
          </Text>
        </View>
        <View style={styles.loginLabel}>
          <Text style={styles.loginLabelText}>{__("Phone number")}</Text>
        </View>
        <View style={styles.loginGroup}>
          <View style={styles.loginCode}>
            <Picker
              items={this.state.countries}
              value={values.country}
              buttonStyle={{
                flexDirection: "row",
                alignItems: "center",
              }}
              optionInnerStyle={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onChange={handleChange("country")}
              renderItem={this.renderCountryListItem}
              renderLabel={this.renderCountryLabel}
            />
          </View>
          <View style={styles.loginDivider} />
          <View style={styles.loginNumber}>
            <TextInput
              placeholder="Enter number"
              value={values.mobilenumber}
              keyboardType="numeric"
              onChangeText={handleChange("mobilenumber")}
              onBlur={handleBlur("mobilenumber")}
              style={styles.loginInput}
            />
          </View>
        </View>
        <View style={styles.loginOtp}>
          <Text style={styles.loginOtpText}>
            {__("We will send you one time password(OTP)")}
          </Text>
        </View>
        <Button style={styles.loginBtn} onPress={submitForm}>
          <Text style={styles.loginBtnText}>{__("Send OTP")}</Text>
        </Button>
        {/* <Button style={styles.loginBtn} onPress={this.changeScreen}>
          <Text style={styles.loginBtnText}>{__("GOTO SCREEN")}</Text>
        </Button> */}
      </View>
    );
  }

  changeScreen() {
    navigate('ChangeSpendLimit')
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

  render() {
    return (
      <Container>
        <LightStatusBar />
        <Content style={theme.layout}>
          <ScrollView style={styles.login}>
            <ImageBackground
              source={require("@asset/images/bg.png")}
              style={styles.loginBg}
            >
              <View style={styles.loginTop}>
                <View style={styles.loginLogo}>
                  <Image
                    source={require("@asset/images/logo-vodafone.png")}
                    style={styles.loginLogoImg}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View style={styles.loginContainer}>
                {this.renderFormContainer()}
              </View>
              <View style={styles.loginBot}>
                <View style={styles.explore}>
                  <Button
                    style={styles.exploreBtn}
                    onPress={() => {
                      logClickEvent("UserLoginProfile");
                      navigate("UserLoginProfile");
                    }}
                  >
                    <Text style={styles.exploreBtnText}>
                      {__("Buy new connection")}
                    </Text>
                  </Button>
                </View>
                <View style={styles.loginOr}>
                  <View style={styles.loginOrLine} />
                  <View style={styles.loginCol}>
                    <Text style={styles.loginOrText}>{__("OR")}</Text>
                  </View>
                  <View style={styles.loginOrRow}>
                    <Text style={styles.loginOrDesc}>
                      {__("Continue with")}
                    </Text>
                  </View>
                </View>
                <View style={styles.loginSocial}>
                  <Button
                    style={styles.loginSocialBtn}
                    onPress={this.openGoogle}
                  >
                    <Image
                      source={require("@asset/icons/btn-google.png")}
                      style={[
                        styles.loginSocialBtnImg,
                        { width: 20, height: 20 },
                      ]}
                      resizeMode="contain"
                    />
                  </Button>
                  <Button
                    style={styles.loginSocialBtn}
                    onPress={this.openFacebook}
                  >
                    <Image
                      source={require("@asset/icons/btn-facebook.png")}
                      style={styles.loginSocialBtnImg}
                      resizeMode="contain"
                    />
                  </Button>
                  <Button
                    style={styles.loginSocialBtn}
                    onPress={this.openApple}
                  >
                    <Image
                      source={require("@asset/icons/btn-apple.png")}
                      style={styles.loginSocialBtnImg}
                      resizeMode="contain"
                    />
                  </Button>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default Login;
