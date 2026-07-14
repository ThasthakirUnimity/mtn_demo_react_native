import React, { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { connect } from "react-redux";

import { Container, Content, Icon, Text } from "@src/component/Basic";
import Header, { CustomHeader } from "@src/component/Header";
import { Button, TextInput } from "@src/component/Form";
import { __ } from "@src/utility/translation";
import { navigate, navigateCurrent } from "@src/navigation";
import theme from "@src/theme/styles";
import styles from "./styles";
import { DarkStatusBar } from "@src/component/StatusBar";
import { removeAccountNumber } from "@src/helper/user";
import Support from "@src/component/Support";

import { httpMockNew } from "@src/utility/http";
import { URLS } from "@src/config/url";

import { CURRENCY } from "@src/theme/typography";

class ChangeSpendLimit extends React.Component {
  // state = {
  //   value: 0,
  // };

  userNumber;

  symbol = CURRENCY.SYMBOL;

  constructor(props) {
    super(props);
    // this.state = {}x

    this.state = {
      values: {},
      limitData: 100,
      limitData2: 100,
    };

    // bind(this)

    // this.onChangeValue = this.onChangeValue.bind(this);

    this.onUpdate = this.onUpdate.bind(this);

    this.onChangeOutstandingCreditLimit =
      this.onChangeOutstandingCreditLimit.bind(this);

    this.onChangeRoamingCreditLimit =
      this.onChangeRoamingCreditLimit.bind(this);
  }

  async onChangeOutstandingCreditLimit() {
    const userSession = this.props.session;
    this.userNumber = userSession.numbers[userSession.numberIndex].number;

    let value = {
      // msisdn: this.userNumber,
      msisdn: "799939662",
      transactionId: "1234452",
      limitType: "Temporary",
      actionType: "Immediate",
      userId: "IPACS",
      newUsageLimit: this.state.limitData,
      externalId: "1015687737",
    };
    console.log(value)

    try {
      let result = (
        await httpMockNew.post(URLS.OUTSTANDING_CREDIT_LIMIT, value)
      ).data;
      console.log("******FETCHED RESULT******");
      console.log(result);

      if (result && result.code == 200) {
        await Support.showSuccess({
          message: __("Updated Successfully"),
          onHide: () => {
            navigateCurrent("UserHome");
          },
          hideDelay: 2500,
        });
      } else {
        await Support.showError({
          message: __(result.message),
          onHide: () => {
            navigateCurrent("UserHome");
          },
          hideDelay: 2500,
        });
      }
    } catch (e) {
      Support.showServerError(e);
    }
  }

  async onChangeRoamingCreditLimit() {
    const userSession = this.props.session;
    this.userNumber = userSession.numbers[userSession.numberIndex].number;

    let value = {
      // msisdn: this.userNumber,
      msisdn: "799939662",
      transactionId: "1234452",
      limitType: "Temporary",
      actionType: "Immediate",
      userId: "IPACS",
      newUsageLimit: this.state.limitData2,
      externalId: "1015687737",
    };
    console.log(value)
    try {
      let result = (await httpMockNew.post(URLS.ROAMING_CREDIT_LIMIT, value))
        .data;
      console.log("******FETCHED RESULT******");
      console.log(result);

      if (result && result.code == 200) {
        await Support.showSuccess({
          message: __("Updated Successfully"),
          onHide: () => {
            navigateCurrent("UserHome");
          },
          hideDelay: 2500,
        });
      } else {
        await Support.showError({
          message: __(result.message),
          onHide: () => {
            navigateCurrent("UserHome");
          },
          hideDelay: 2500,
        });
      }
    } catch (e) {
      Support.showServerError(e);
    }
  }

  incrementValue = () => {
    this.setState({
      limitData: this.state.limitData + 1,
    });

    console.log(this.state.limitData + 1);
  };

  decrementValue = () => {
    this.setState({
      limitData: this.state.limitData - 1,
    });

    console.log(this.state.limitData - 1);
  };

  async onUpdate() {
    Support.showLoading();

    try {
      const r = (await http.post(URLS.USER_PROFILE, this.state.values)).data;

      await fetchUserSessionInformation();

      await Support.showSuccess({
        message: __("Successfully saved."),
        onHide: () => {
          navigateCurrent("UserProfile");
        },
        hideDelay: 2500,
      });
    } catch (e) {
      Support.showServerError(e);
    }

    Support.hideLoading();
  }



  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType="back"
          title="Change Spend Limit"
          titleColor="light"
          rightContent={
            <Text style={styles.saveBtnText}>{this.userNumber}</Text>
          }
        />

        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.speedDetail}>
              {/* <View style={styles.speedGroup}>
                <View style={styles.speedRow}>
                  <Text style={styles.speedLabel2}>
                    {__(
                      "The maximum available spend limit for this account is "
                    )}
                    {this.symbol}
                    {this.state.limitData}
                  </Text>
                </View>
              </View> */}

              <View style={styles.speedGroup}>
                <View style={styles.speedRow}>
                  <Text style={styles.speedLabel2}>
                    {__(
                      "You can adjust this amount by update your bill limit."
                    )}
                  </Text>
                </View>
              </View>

              {/* <View style={styles.speedLast}>
                <Button
                  style={styles.speedBtn}
                  onPress={this.onChangeRoamingCreditLimit}
                >
                  <Text style={styles.speedBtnText}>{__("Update")}</Text>
                </Button>
              </View> */}
            </View>

            <View style={styles.speed}>
              {/* <View style={styles.speedInfo}> */}
                <Text style={styles.speedLabel2}>
                  {__(
                    "Set how much you are willing to spend after your inclusive airtime, data and SMS values are finished."
                  )}
                </Text>
                {/* <Text style={styles.speedLabel3}>
                  {__(
                    "Set your roaming credit limit:"
                  )}
                </Text> */}
              {/* </View> */}

              {/* <View style={{ flexDirection: "row" }}> */}
              {/* <Button style={styles.speedBtn2} onPress={this.decrementValue}>
                  <Text style={styles.speedBtnText2}>{__("-")}</Text>
                </Button> */}

              {/* <Text style={styles.speedText2}>
                  {this.symbol}
                  {this.state.limitData}
                </Text> */}

              <View style={styles.formContent}>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{'Set your outstanding credit limit (  '}{this.symbol}{')'}</Text>
                </View>

                <TextInput
                  editable={true}
                  placeholder=""
                  keyboardType="phone-pad"
                  maxLength={8}
                  placeholderTextColor="rgba(0, 0, 0, 1)"
                  style={styles.formInput}
                  value={this.state.limitData}
                  onChangeText={(value) => this.setState({limitData: value})}
                />
              </View>
              {/* <Button style={styles.speedBtn2} onPress={this.incrementValue}>
                  <Text style={styles.speedBtnText2}>{__("+")}</Text>
                </Button> */}

              <View style={styles.speedLast}>
                <Button
                  style={styles.speedBtn}
                  onPress={this.onChangeOutstandingCreditLimit}
                >
                  <Text style={styles.speedBtnText}>{__("Update")}</Text>
                </Button>
              </View>


              <View style={styles.formContent}>
                <View style={styles.formLabel}>
                  <Text style={styles.formLabelText}>{'Set your roaming credit limit ( '}{this.symbol}{')'}</Text>
                </View>

                <TextInput
                  editable={true}
                  placeholder=""
                  keyboardType="phone-pad"
                  maxLength={8}
                  placeholderTextColor="rgba(0, 0, 0, 1)"
                  style={styles.formInput}
                  value={this.state.limitData2}
                  onChangeText={(value) => this.setState({limitData2: value})}
                />
              </View>
              {/* <Button style={styles.speedBtn2} onPress={this.incrementValue}>
                  <Text style={styles.speedBtnText2}>{__("+")}</Text>
                </Button> */}

              <View style={styles.speedLast}>
                <Button
                  style={styles.speedBtn}
                  onPress={this.onChangeRoamingCreditLimit}
                >
                  <Text style={styles.speedBtnText}>{__("Update")}</Text>
                </Button>
              </View>
            </View>
            {/* </View> */}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default connect(({ session }) => ({ session }))(ChangeSpendLimit);
