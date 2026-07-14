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

import { CURRENCY } from "@src/theme/typography";

class CreditLimit extends React.Component {
  state = {
    outstandingValue: 3012,
    roamingValue: 1013,
  };

  userNumber
  symbol = CURRENCY.SYMBOL;

  constructor(props) {
    super(props);
    // this.state = {}x

    this.onChange = this.onChange.bind(this);

    const userSession = this.props.session;
    this.userNumber = userSession.numbers[userSession.numberIndex].number;

    console.log("User Number",this.userNumber)
  }

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
    });

    console.log(this.state.value + 1);
  };

  decrementValue = () => {
    this.setState({
      value: this.state.value - 1,
    });

    console.log(this.state.value - 1);
  };

  onChange() {
    navigate("ChangeSpendLimit");
  }

  render() {
    let user = {};

    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType="back"
          title="Credit Limit"
          titleColor="light"
          rightContent={
            <Text style={styles.saveBtnText}>{this.userNumber}</Text>
          }
        />

        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.spendDetail}>

              {/* <View style={{ flexDirection: "row" }}> */}
                <View style={styles.spendGroup}>
                  <View style={styles.spendRow}>
                    <Text style={styles.spendLabel}>
                      {__("Outstanding limit")}
                    </Text>
                  </View>


                </View>

                <View style={styles.spendGroup}>
                  <View style={styles.spendRow}>
                    <Text style={styles.spendLabel}>
                      {this.symbol}
                      {this.state.outstandingValue}
                    </Text>
                  </View>

                  <View style={styles.spendRow}>
                    <Button style={styles.spendBtn} onPress={this.onChange}>
                      <Text style={styles.spendBtnText}>{__("Update")}</Text>
                    </Button>
                  </View>
                </View>
              {/* </View> */}


            </View>


            <View style={styles.spendDetail}>
            {/* <View style={{ flexDirection: "row" }}> */}
                <View style={styles.spendGroup}>
                  <View style={styles.spendRow}>
                    <Text style={styles.spendLabel}>
                      {__("Roaming voice credit limit")}
                    </Text>
                  </View>

                </View>

                <View style={styles.spendGroup}>
                  <View style={styles.spendRow}>
                    <Text style={styles.spendLabel}>
                      {this.symbol}
                      {this.state.roamingValue}
                    </Text>
                  </View>

                  <View style={styles.spendRow}>
                    <Button style={styles.spendBtn} onPress={this.onChange}>
                      <Text style={styles.spendBtnText}>{__("Update")}</Text>
                    </Button>
                  </View>
                </View>
              </View>
            {/* </View> */}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default connect(({ session }) => ({ session }))(CreditLimit);
