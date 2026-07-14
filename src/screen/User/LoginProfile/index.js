import moment from "moment";
import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";

import { CURRENCY, APP_DETAILS } from '@src/theme/typography'


import { Container, Content, Icon } from "@src/component/Basic";
import { Button, DatePicker, TextInput } from "@src/component/Form";
import { CustomHeader } from "@src/component/Header";
import { LightStatusBar } from "@src/component/StatusBar";
import Support from "@src/component/Support";
import { URLS } from "@src/config/url";
import { fetchUserSessionInformation } from "@src/helper/user";
import { navigateCurrent, navigate } from "@src/navigation";
import { updateUser } from "@src/store/reducers/session";
import { applyComponentFeatures } from "@src/utility/core";
import { __ } from "@src/utility/translation";
import { httpMock } from "@src/utility/http";
import http from "@src/utility/http";
import styles from "./styles";
import { openImagePicker } from "@src/utility/file";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: "",
      completedSteps: [],
      showSubmit: false,
      showNext: false,
      values: {},
      interests: [
        {
          id: 1,
          name: "Jam Out to music",
        },
        {
          id: 2,
          name: "Engross in a movie",
        },
        {
          id: 3,
          name: "Pay Head to News",
        },
        {
          id: 4,
          name: "Check out on Sports",
        },
      ],

      simservices: [
        {
          id: 1,
          name: "Postpaid",
        },
        {
          id: 2,
          name: "Prepaid",
        },
        {
          id: 3,
          name: "Airbox",
        },
      ],

      simtypes: [
        {
          id: 1,
          name: "eSim",
        },
        {
          id: 2,
          name: "Physical Sim",
        },
      ],

      identifications: [
        {
          id: 1,
          name: "Local ID",
        },
        {
          id: 2,
          name: "Passport",
        },
      ],
      starterpacks: [
        {
          id: 1,
          name: "Prepaid Starter Pack",
          currency : CURRENCY.SYMBOL,
          price: "100",
          initialCredit: CURRENCY.SYMBOL + " 87",
          dataOffered: "3 GB per day for 7 days",
          localSms: "Unlimited for 7 days",
        },
        {
          id: 2,
          name: "Tourist Pack",
          price: "400",
          currency : CURRENCY.SYMBOL,
          initialCredit: CURRENCY.SYMBOL + "100 (valid for 15 days)",
          dataOffered: "100 GB (valid for 15 days)",
          localSms: "Unlimited for 15 days",
        },
      ],

      // numbers: [
      //   {
      //     id: "1",
      //     msisdn: "54591486",
      //   },
      //   {
      //     id: "2",
      //     msisdn: "54599994",
      //   },
      //   {
      //     id: "3",
      //     msisdn: "54591463",
      //   },
      //   {
      //     id: "4",
      //     msisdn: "54532470",
      //   },
      //   {
      //     id: "5",
      //     msisdn: "54599938",
      //   },
      // ],
      numbers: {},
    };

 
    console.log("SNSN 3 --> " +  JSON.stringify(props))
    const chatParam = props.route.params?.chatSettings || undefined
    if( chatParam != undefined)
    { 
      this.state =  chatParam
      this.state.currentStep = "numbers"
      this.state.isFromPayment = true
    
    } 
    applyComponentFeatures(this);

    this.onChangeValue = this.onChangeValue.bind(this);

    this.getMsisdn = this.getMsisdn.bind(this);

    // STEP WELCOME
    this.rendeStepWelcome = this.rendeStepWelcome.bind(this);

    // NAME
    this.onSubmitName = this.onSubmitName.bind(this);
    this.rendeStepName = this.rendeStepName.bind(this);

    // DOB
    this.onSubmitDob = this.onSubmitDob.bind(this);
    this.rendeStepDob = this.rendeStepDob.bind(this);

    // INTERESTS
    this.fetchInterests = this.fetchInterests.bind(this);
    this.onSelectInterest = this.onSelectInterest.bind(this);
    this.onSubmitInterestType = this.onSubmitInterestType.bind(this);
    this.rendeStepInterest = this.rendeStepInterest.bind(this);

    // SIM SERVICE
    this.rendeStepSimService = this.rendeStepSimService.bind(this);
    this.onSelectSim = this.onSelectSim.bind(this);

    // STARTER PACK
    this.rendeStepStarterPack = this.rendeStepStarterPack.bind(this);
    this.onSelectStarterPack = this.onSelectStarterPack.bind(this);

    // SIM SELECTION TYPE
    this.rendeStepSimType = this.rendeStepSimType.bind(this);
    this.onSelectSimType = this.onSelectSimType.bind(this);

    // DOCUMENT UPLOAD
    this.selectDocument = this.selectDocument.bind(this);
    this.rendeStepIdentification = this.rendeStepIdentification.bind(this);

    // SELFIE UPLOAD
    this.selectProfile = this.selectProfile.bind(this);
    this.rendeStepSelfie = this.rendeStepSelfie.bind(this);
    // this.onSelectSelfie = this.onSelectSelfie.bind(this);
    // this.rendeStepSelfieShow = this.rendeStepSelfieShow.bind(this);

    // PATMENT SCREEN
    this.rendeStepPayment = this.rendeStepPayment.bind(this);
    this.onSelectPayment = this.onSelectPayment.bind(this);

    // NUMBERS
    this.rendeStepNumbers = this.rendeStepNumbers.bind(this);
    this.onSelectNumbers = this.onSelectNumbers.bind(this);

    this.rendeStepFinal = this.rendeStepFinal.bind(this);

    this.onSubmitStep = this.onSubmitStep.bind(this);
    this.onSave = this.onSave.bind(this);
    this.renderFooter = this.renderFooter.bind(this);

    // this.renderTest = this.renderTest.bind(this);



  }

  // renderTest() {
  //   return (
  //     <>
  //       <FlatList
  //         numColumns={2}
  //         data={this.state.interests}
  //         keyExtractor={(item, index) => index.toString()}
  //         renderItem={({ item }) => {
  //           console.log(item);
  //           return <Text style={styles.item}>{item.name}</Text>;
  //         }}
  //       />
  //     </>
  //   );
  // }

  async componentDidMount() {
    await this.fetchInterests();
    this.getMsisdn();
    setTimeout(() => {
      if( this.state.isFromPayment )
      { 
        this.setState({
          currentStep: "numbers",
        });
      } 
      else{
        this.setState({
          currentStep: "name",
        });
      }

    }, 1000);
  }

  async getMsisdn() {
    try {
      this.state.numbers = (await httpMock.get(URLS.MOCK_GET_MSISDN)).data;

      console.log("******FETCHED MSISDN******");
      console.log(this.state.numbers);
    } catch (e) {}
  }

  async onChangeValue(key, value) {
    const values = { ...this.state.values };
    values[key] = value;
    await this.promisedSetState({ values });
  }

  onSubmitStep() {
    if (this.state.currentStep == "name") {
      this.onSubmitName();
    }

    if (this.state.currentStep == "dob") {
      this.onSubmitDob();
    }

    if (this.state.currentStep == "interests") {
      this.onSubmitInterestType();
    }
  }

  // WELCOME
  rendeStepWelcome() {
    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "name") {
      statusIcon = this.renderStatusIcon();
    }
    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>
        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>
            {__("Hi there! Welcome to "+ APP_DETAILS.APP_NAME +". How can we, help you today?")}
          </Text>
        </View>
      </View>
    );
  }

  // NAME
  onSubmitName() {
    if (
      !(this.state.values.nickName && this.state.values.nickName.trim().length)
    ) {
      Support.showError({
        message: __("Please enter name"),
      });
      return;
    }

    this.setState({
      completedSteps: [...this.state.completedSteps, "name"],
      currentStep: "dob",
    });
  }

  rendeStepName() {
    const completed = this.state.completedSteps.includes("name");
    if (!(this.state.currentStep == "name" || completed)) {
      return null;
    }

    let data;
    if (completed) {
      data = (
        <>
          <View style={styles.chatAnswer2}>
            <Text style={styles.chatAns}>{this.state.values.nickName}</Text>
          </View>
        </>
      );
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon} />
        <View style={styles.chatData}>
          <View style={styles.chatQuestion}>
            <Text style={styles.chatText}>
              {__("Btw, What Should I Call You?")}
            </Text>
          </View>
          {data}
        </View>
      </View>
    );
  }

  // DOB
  onSubmitDob() {
    if (!(this.state.values.dob && this.state.values.dob.trim().length)) {
      Support.showError({
        message: __("Please select a date"),
      });
      return;
    }

    const m = moment(this.state.values.dob, "YYYY-MM-DD");
    if (!m.isValid()) {
      Support.showError({
        message: __("Please select a valid date"),
      });
      return;
    }

    const year = moment().diff(
      moment(this.state.values.dob, "YYYY-MM-DD"),
      "years"
    );
    if (year <= 0) {
      Support.showError({
        message: __("Your age should be 16 or above 16"),
      });
      return;
    }

    this.setState({
      completedSteps: [...this.state.completedSteps, "dob"],
      currentStep: "interests",
    });
  }

  rendeStepDob() {
    const completed = this.state.completedSteps.includes("dob");
    if (!(this.state.currentStep == "dob" || completed)) {
      return null;
    }

    let data;
    if (completed) {
      data = (
        <View style={styles.chatAnswer2}>
          <Text style={styles.chatText}>
            {__("Your age")}{" "}
            {moment().diff(
              moment(this.state.values.dob, "YYYY-MM-DD"),
              "years"
            ) || "-"}
          </Text>
        </View>
      );
    }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "dob") {
      statusIcon = this.renderStatusIcon();
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>
        <View style={styles.chatData}>
          <View style={styles.chatQuestion}>
            <Text style={styles.chatText}>{__("What is your age?")}</Text>
          </View>
          {data}
        </View>
      </View>
    );
  }

  // INTERESTS
  async fetchInterests() {
    try {
      const r = (await http.get(URLS.INTEREST)).data;
      await this.promisedSetState({
        pageContent: r.res_messageDescription.records,
      });
    } catch (e) {}
  }

  onSelectInterest(id) {
    var interests = this.state.values.userInterest
      ? this.state.values.userInterest
      : []; // make a separate copy of the array
    var index = interests.indexOf(id);
    if (index !== -1) {
      interests.splice(index, 1);
    } else {
      interests.push(id);
    }

    this.setState({
      values: { ...this.state.values, userInterest: interests },
      showNext: interests.length > 0,
    });
    // console.log(this.state.values)
  }

  onSubmitInterestType() {
    console.log("REACHED INTEREST TYPE");
    this.setState({
      completedSteps: [...this.state.completedSteps, "interests"],
      currentStep: "sims",
      showNext: false,
    });
  }

  rendeStepInterest() {
    if (
      !(
        this.state.currentStep == "interests" ||
        this.state.completedSteps.includes("interests")
      )
    ) {
      return null;
    }

    const completed = this.state.completedSteps.includes("interests");
    if (!(this.state.currentStep == "interests" || completed)) {
      return null;
    }

    let data;
    if (completed) {
      data = (
        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>
            {__("Awesome start, " + this.state.values.nickName)}
          </Text>
        </View>
      );
    }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "interests") {
      statusIcon = this.renderStatusIcon();
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>
        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>
            {__("So, ") + this.state.values.nickName}
          </Text>
          <Text style={styles.chatText}>{__("What feeds your spirits?")}</Text>
        </View>
        <View style={styles.opt}>
          {this.state.interests.map((interest) => {
            const selected =
              this.state.values.userInterest &&
              this.state.values.userInterest.includes(interest.id);
            const btnStyle = [styles.optBtn];
            if (selected) {
              btnStyle.push(styles.optBtnActive);
            }
            return (
              <Button
                key={interest.id}
                onPress={() => this.onSelectInterest(interest.id)}
                style={btnStyle}
              >
                <Text
                  style={selected ? styles.optBtnActiveText : styles.optBtnText}
                >
                  {interest.name}
                </Text>
              </Button>
            );
          })}
        </View>
      </View>
    );
  }

  // SIM SERVICE TYPE
  rendeStepSimService() {
    if (
      !(
        this.state.currentStep == "sims" ||
        this.state.completedSteps.includes("sims")
      )
    ) {
      return null;
    }

    const completed = this.state.completedSteps.includes("sims");
    if (!(this.state.currentStep == "sims" || completed)) {
      return null;
    }

    let data;
    if (completed) {
      data = (
        <View style={styles.chatAnswer2}>
          <Text style={styles.chatText}>
            {__("Awesome, " + this.state.values.nickName)}
          </Text>
        </View>
      );
    }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "sims") {
      statusIcon = this.renderStatusIcon();
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>
        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>{__("Choose an "+ APP_DETAILS.APP_NAME +" Service")}</Text>
        </View>
        <View style={styles.opt}>
          {this.state.simservices.map((simservice) => {
            const selected =
              this.state.values.userSim &&
              this.state.values.userSim.includes(simservice.id);
            console.log(this.state.values.userSim);
            const btnStyle = [styles.optBtn];
            if (selected) {
              btnStyle.push(styles.optBtnActive);
            }
            return (
              <Button
                key={simservice.id}
                onPress={() => this.onSelectSim(simservice.id)}
                style={btnStyle}
              >
                <Text
                  style={selected ? styles.optBtnActiveText : styles.optBtnText}
                >
                  {simservice.name}
                </Text>
              </Button>
            );
          })}
        </View>
      </View>
    );
  }

  onSelectSim(id) {
    var sim = this.state.values.userSim ? this.state.values.userSim : []; // make a separate copy of the array

    var index = sim.indexOf(id);
    if (index !== -1) {
      sim.splice(index, 1);
    } else {
      sim.push(id);
    }

    this.setState({
      values: { ...this.state.values, userSim: sim },
    });

    this.setState({
      completedSteps: [...this.state.completedSteps, "sims"],
      currentStep: "starterpack",
    });
  }

  // STARTER PACK
  rendeStepStarterPack() {
    if (
      !(
        this.state.currentStep == "starterpack" ||
        this.state.completedSteps.includes("starterpack")
      )
    ) {
      return null;
    }

    const completed = this.state.completedSteps.includes("starterpack");
    if (!(this.state.currentStep == "starterpack" || completed)) {
      return null;
    }

    let data;
    if (completed) {
      data = (
        <View style={styles.chatAnswer2}>
          <Text style={styles.chatText}>
            {__("Awesome, " + this.state.values.nickName)}
          </Text>
        </View>
      );
    }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "starterpack") {
      statusIcon = this.renderStatusIcon();
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>
        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>{__("Choose from starter pack")}</Text>
        </View>

        <View style={styles.optTest}>
          {this.state.starterpacks.map((pack) => {
            const selected =
              this.state.values.userPack &&
              this.state.values.userPack.includes(pack.id);
            const btnStyle = [styles.optBtn];
            if (selected) {
              btnStyle.push(styles.optBtnActive);
            }
            return (
              <Button
                key={pack.id}
                onPress={() => this.onSelectStarterPack(pack.id)}
                style={styles.optBtnTest}
              >
                <View style={styles.optBgTest}>
                  <Text style={styles.optBtnHeaderText}>{pack.name}</Text>
                  <View style={styles.grid}>
                    <Text style={styles.item}>{"PRICE : "}</Text>
                    <Text style={styles.item2}>{pack.price}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.item}>{"INITIAL CREDIT : "}</Text>
                    <Text style={styles.item2}>{pack.initialCredit}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.item}>{"DATA OFFERED : "}</Text>
                    <Text style={styles.item2}>{pack.dataOffered}</Text>
                  </View>
                  <View style={styles.grid}>
                    <Text style={styles.item}>{"LOCAL SMS : "}</Text>
                    <Text style={styles.item2}>{pack.localSms}</Text>
                  </View>
                </View>
              </Button>
            );
          })}
        </View>

        {/* <View style={styles.opt}>
          <Button
            key={1}
            onPress={() => this.onSelectStarterPack(1)}
            style={styles.optBtn}
          >
            <Text style={styles.optBtnHeaderText}>
              {"Prepaid Starter Pack"}
            </Text>
          </Button>
        </View>

        <View style={styles.opt}>
          <Button
            key={2}
            onPress={() => this.onSelectStarterPack(2)}
            style={styles.optBtn}
          >
            <Text style={styles.optBtnHeaderText}>{"Tourist Pack"}</Text>
          </Button>
        </View> */}
      </View>
    );
  }

  onSelectStarterPack(id) {
    var pack = this.state.values.userPack ? this.state.values.userPack : []; // make a separate copy of the array

    var index = pack.indexOf(id);
    if (index !== -1) {
      pack.splice(index, 1);
    } else {
      pack.push(id);
    }

    this.setState({
      values: { ...this.state.values, userPack: pack },
    });

    this.setState({
      completedSteps: [...this.state.completedSteps, "starterpack"],
      currentStep: "simtype",
    });
  }

  // TYPES OF SIM
  rendeStepSimType() {
    if (
      !(
        this.state.currentStep == "simtype" ||
        this.state.completedSteps.includes("simtype")
      )
    ) {
      return null;
    }

    const completed = this.state.completedSteps.includes("simtype");
    if (!(this.state.currentStep == "simtype" || completed)) {
      return null;
    }

    let data;
    if (completed) {
      data = (
        <View style={styles.chatAnswer2}>
          <Text style={styles.chatText}>
            {__("Awesome, " + this.state.values.nickName)}
          </Text>
        </View>
      );
    }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "sims") {
      statusIcon = this.renderStatusIcon();
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>
        <View style={styles.chatAnswer2}>
          <Text style={styles.chatText}>
            {__(
              "Thanks for selecting Tourist Pack in Rs. 400 with Initial Card Rs.100, 100 GB Data and Unlimited SMS for 15 days. "
            )}
          </Text>
        </View>
        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>{__("Choose type of Sim ")}</Text>
        </View>
        <View style={styles.opt}>
          {this.state.simtypes.map((simtype) => {
            const selected =
              this.state.values.userSimType &&
              this.state.values.userSimType.includes(simtype.id);
            console.log(this.state.values.userSimType);
            const btnStyle = [styles.optBtn];
            if (selected) {
              btnStyle.push(styles.optBtnActive);
            }
            return (
              <Button
                key={simtype.id}
                onPress={() => this.onSelectSimType(simtype.id)}
                style={btnStyle}
              >
                <Text
                  style={selected ? styles.optBtnActiveText : styles.optBtnText}
                >
                  {simtype.name}
                </Text>
              </Button>
            );
          })}
        </View>
      </View>
    );
  }

  onSelectSimType(id) {
    var simType = this.state.values.userSimType
      ? this.state.values.userSimType
      : []; // make a separate copy of the array

    var index = simType.indexOf(id);
    if (index !== -1) {
      simType.splice(index, 1);
    } else {
      simType.push(id);
    }

    this.setState({
      values: { ...this.state.values, userSimType: simType },
    });

    this.setState({
      completedSteps: [...this.state.completedSteps, "simtype"],
      currentStep: "identification",
    });
  }

  // IDENTIFICATION TYPE
  rendeStepIdentification() {
    if (
      !(
        this.state.currentStep == "identification" ||
        this.state.completedSteps.includes("identification")
      )
    ) {
      return null;
    }

    const completed = this.state.completedSteps.includes("identification");
    if (!(this.state.currentStep == "identification" || completed)) {
      return null;
    }

    let data;
    if (completed) {
      data = (
        <>
          <View style={styles.chatAnswer2}>
            {__(
              "Thanks for selecting eSIM, kindly choose the  type of identification to activate your sim .."
            )}
          </View>
        </>
      );
    }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "identification") {
      statusIcon = this.renderStatusIcon();
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>
        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>
            {__(
              "Thanks for selecting eSIM, kindly choose the type of identification to activate your sim .."
            )}
          </Text>
        </View>
        <View style={styles.opt}>
          {this.state.identifications.map((identification) => {
            const selected =
              this.state.values.userIdentification &&
              this.state.values.userIdentification.includes(identification.id);
            console.log(this.state.values.userIdentification);
            const btnStyle = [styles.optBtn];
            if (selected) {
              btnStyle.push(styles.optBtnActive);
            }
            return (
              <Button
                style={btnStyle}
                key={identification.id}
                onPress={this.selectDocument}
              >
                <Text
                  style={selected ? styles.optBtnActiveText : styles.optBtnText}
                >
                  {identification.name}
                </Text>
              </Button>

              // <Button
              //   key={identification.id}
              //   onPress={() => this.onSelectIdentification(identification.id)}
              //   style={btnStyle}
              // >
              //   <Text
              //     style={selected ? styles.optBtnActiveText : styles.optBtnText}
              //   >
              //     {identification.name}
              //   </Text>
              // </Button>
            );
          })}
        </View>
      </View>
    );
  }

  onSelectIdentification(id) {
    var identification = this.state.values.identification
      ? this.state.values.userIdentification
      : []; // make a separate copy of the array

    var index = identification.indexOf(id);
    if (index !== -1) {
      identification.splice(index, 1);
    } else {
      identification.push(id);
    }

    this.setState({
      values: { ...this.state.values, userIdentification: identification },
      completedSteps: [...this.state.completedSteps, "identification"],
      currentStep: "selfie",
    });

    // this.selectDocument()
  }

  selectDocument() {
    openImagePicker({
      title: "Upload Document",
      message: "Select from galley or camera",
      onSuccess: async (data) => {
        await Support.showLoading();
        try {
          const headers = {};
          const uri = data.path;
          const type = data.mime;
          const name = data.name;
          const document = {
            uri: data.path,
            type: data.mime,
            name: data.name,
          };

          this.setState({
            values: { ...this.state.values, userDocument: document },
            completedSteps: [...this.state.completedSteps, "identification"],
            currentStep: "selfie",
          });
          console.log(this.state.values);
        } catch (e) {
          await Support.showServerError(e);
        }
        await Support.hideLoading();
      },
    });
  }

  // SELFIE
  rendeStepSelfie() {
    if (
      !(
        this.state.currentStep == "selfie" ||
        this.state.completedSteps.includes("selfie")
      )
    ) {
      return null;
    }

    const completed = this.state.completedSteps.includes("selfie");
    if (!(this.state.currentStep == "selfie" || completed)) {
      return null;
    }

    let data;
    if (completed) {
      data = (
        <>
          <View style={styles.chatAnswer2}>
            {__(
              "Thanks for submitting your details and identification proofs.. As next step kindly Take a Selfie .."
            )}
          </View>
        </>
      );
    }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "selfie") {
      statusIcon = this.renderStatusIcon();
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.optBgTest}>
          <Text style={styles.optText2}>{"DETAILS"}</Text>
          <View style={styles.grid}>
            <Text style={styles.item}>{"FIRST NAME : "}</Text>
            <Text style={styles.item2}>{"GAURAV"}</Text>
          </View>
          <View style={styles.grid}>
            <Text style={styles.item}>{"LAST NAME : "}</Text>
            <Text style={styles.item2}>{"VERMA"}</Text>
          </View>
          <View style={styles.grid}>
            <Text style={styles.item}>{"PASSPORT : "}</Text>
            <Text style={styles.item2}>{"Z6718021"}</Text>
          </View>
          <View style={styles.grid}>
            <Text style={styles.item}>{"DATE OF BIRTH : "}</Text>
            <Text style={styles.item2}>{"05/01/1979"}</Text>
          </View>
        </View>
        <View>
          <View style={styles.chatIcon}>{statusIcon}</View>
          <View style={styles.chatAnswer2}>
            <Text style={styles.chatText}>
              {__(
                "Thanks for submitting your details and identification proofs.. As next step kindly Take a Selfie .."
              )}
            </Text>
          </View>
        </View>

        <View style={styles.opt}>
          <Button style={styles.optBtn} key={1} onPress={this.selectProfile}>
            <Text style={styles.optBtnText}>{"Take a Selfie"}</Text>
          </Button>
        </View>
      </View>
    );
  }

  selectProfile() {
    openImagePicker({
      title: "Selfie",
      message: "Select from galley or camera",
      onSuccess: async (data) => {
        await Support.showLoading();
        try {
          var uri = data.path;
          var type = data.mime;
          var name = data.name;
          let selfie = {
            uri: data.path,
            type: data.mime,
            name: data.name,
          };

          this.setState({
            values: { ...this.state.values, userSelfieData: selfie },
            completedSteps: [...this.state.completedSteps, "selfie"],
            currentStep: "payment",
          });

          // console.log(this.state.values);
        } catch (e) {
          await Support.showServerError(e);
        }
        await Support.hideLoading();
      },
    });
  }

  // SELFIE IMAGE VISUAL
  // rendeStepSelfieShow() {
  //   if (
  //     !(
  //       this.state.currentStep == "selfieshow" ||
  //       this.state.completedSteps.includes("selfieshow")
  //     )
  //   ) {
  //     return null;
  //   }

  //   const completed = this.state.completedSteps.includes("selfieshow");
  //   if (!(this.state.currentStep == "selfieshow" || completed)) {
  //     return null;
  //   }

  //   let statusIcon;
  //   if (!this.state.currentStep || this.state.currentStep == "selfieshow") {
  //     statusIcon = this.renderStatusIcon();
  //   }

  //   return (
  //     <View style={styles.chatRow}>
  //       <View style={styles.chatIcon}>{statusIcon}</View>
  //       <View style={styles.chatQuestion}>
  //         <Text style={styles.chatText}>
  //           {__(
  //             "Thanks, now just two steps to complete payment & activate your eSim.              "
  //           )}
  //         </Text>
  //         </View>

  //       {/* <View style={styles.opt}>
  //         <Button
  //           key={1}
  //           onPress={() => this.onSelectSelfie(1)}
  //           style={styles.optBtn}
  //         >
  //           <Text style={styles.optBtnText}>{"Take a Selfie"}</Text>
  //         </Button>
  //       </View> */}

  //       <View style={styles.opt}>
  //         <Image
  //           style={styles.imageSize}
  //           source={this.state.values.userSelfie.uri}
  //         />
  //       </View>
  //     </View>
  //   );
  // }

  // onSelectSelfie(id) {
  //   var selfie = this.state.values.selfie ? this.state.values.userSelfie : []; // make a separate copy of the array

  //   this.setState({
  //     values: { ...this.state.values, userSelfie: selfie },
  //   });

  //   this.setState({
  //     completedSteps: [...this.state.completedSteps, "selfie"],
  //     currentStep: "payment",
  //   });
  // }

  rendeStepPayment() {
    if (
      !(
        this.state.currentStep == "payment" ||
        this.state.completedSteps.includes("payment")
      )
    ) {
      return null;
    }

    const completed = this.state.completedSteps.includes("payment");
    if (!(this.state.currentStep == "payment" || completed)) {
      return null;
    }

    // let data;
    // if (completed) {
    //   data = (
    //     <>
    //       <View style={styles.chatAnswer2}>
    //         {__(
    //           "Thanks, now just two steps to complete payment & activate your eSim."
    //         )}
    //       </View>
    //     </>
    //   );
    // }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "payment") {
      statusIcon = this.renderStatusIcon();
    }

    let data;
    if (completed) {
      data = (
        <>
          <View style={styles.chatAnswer2}>
            {__(
              "Thanks, now just two steps to complete payment & activate your eSim.              "
            )}
          </View>
        </>
      );
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>
        <View style={styles.chatAnswer2}>
          <Text style={styles.chatText}>
            {__(
              "Thanks, now just two steps to complete payment & activate your eSim."
            )}
          </Text>
        </View>

        <View style={styles.opt}>
          <Button style={styles.optBtn} key={1} onPress={this.onSelectPayment}>
            <Text style={styles.optBtnText}>{"Pay Now to Activate"}</Text>
          </Button>
        </View>
      </View>
    );
  }

  onSelectPayment() {
    //navigate("UserPayment", this.state);
    console.log("SNSN --> ");
    this.state.completedSteps =  [...this.state.completedSteps, "payment"]
    this.state.currentStep = "numbers"

    // this.setState({
    //   completedSteps: [...this.state.completedSteps, "payment"],
    //   currentStep: "numbers",
    // });
    
    navigate("UserPayment", {
      profile: this.state,
      cart: {
        productType: this.state.starterpacks[0].name,
        currency: CURRENCY.SYMBOL,
        total: this.state.starterpacks[0].price,
        items: []
      },
      chatState: this.state
    });
   
  }


  onFinishingPayment() {
    console.log("SNSN --> ");
    this.setState({
      completedSteps: [...this.state.completedSteps, "payment"],
      currentStep: "numbers",
    });
  }

  rendeStepNumbers() {
    console.log("Chat | Current Step --> " + this.state.currentStep )
    
    if (
      !(
        this.state.currentStep == "numbers" ||
        this.state.completedSteps.includes("numbers")
      ) 
    ) {
      return null;
    }  

    const completed = this.state.completedSteps.includes("numbers");
    if (!(this.state.currentStep == "numbers" || completed)) {
      return null;
    }

    let data;
    if (completed) {
      data = (
        <View style={styles.chatAnswer2}>
          <Text style={styles.chatText}>
            {__("Awesome, " + this.state.values.nickName)}
          </Text>
        </View>
      );
    }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "numbers") {
      statusIcon = this.renderStatusIcon();
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>
        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>
            {__(
              "Thanks for your payment, Lets choose a phone number & start enjoying "+ APP_DETAILS.APP_NAME +" services!"
            )}
          </Text>
        </View>
        <View style={styles.opt}>
          {this.state.numbers.map((number) => {
            const selected =
              this.state.values.userSelectedNumber &&
              this.state.values.userSelectedNumber.includes(number.msisdn);
            console.log(this.state.values.userSelectedNumber);
            const btnStyle = [styles.optBtn];
            if (selected) {
              btnStyle.push(styles.optBtnActive);
            }
            return (
              <Button  
                key={number.msisdn}
                onPress={() => this.onSelectNumbers(number.msisdn)}
                style={btnStyle}
              >
                <Text
                  style={selected ? styles.optBtnActiveText : styles.optBtnText}
                >
                  {number.msisdn}
                </Text>
              </Button>
            ); 
          })}
        </View>
      </View>
    );
  }

  onSelectNumbers(msisdn) {
    // var selectedNumber = this.state.values.userSelectedNumber
    //   ? this.state.values.userSelectedNumber
    //   : []; // make a separate copy of the array

    // var index = selectedNumber.indexOf(msisdn);
    // if (index !== -1) {
    //   selectedNumber.splice(index, 1);
    // } else {
    //   selectedNumber.push(msisdn);
    // }

    this.setState({
      values: { ...this.state.values, userSelectedNumber: msisdn },
    });

    this.setState({
      completedSteps: [...this.state.completedSteps, "numbers"],
      currentStep: "finalsubmit",
    });
  }

  rendeStepFinal() {
    if (
      !(
        this.state.currentStep == "finalsubmit" ||
        this.state.completedSteps.includes("finalsubmit")
      )
    ) {
      return null;
    }

    const completed = this.state.completedSteps.includes("finalsubmit");
    if (!(this.state.currentStep == "finalsubmit" || completed)) {
      return null;
    }

    // let data;
    // if (completed) {
    //   data = (
    //     <>
    //       <View style={styles.chatAnswer2}>
    //         {__(
    //           "Thanks for submitting your details and identification proofs.. As next step kindly Take a Selfie .."
    //         )}
    //       </View>
    //     </>
    //   );
    // }

    let statusIcon;
    if (!this.state.currentStep || this.state.currentStep == "finalsubmit") {
      statusIcon = this.renderStatusIcon();
    }

    return (
      <View style={styles.chatRow}>
        <View style={styles.chatIcon}>{statusIcon}</View>

        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>
            {__(
              "Please wait we are Activating your Phone Number " +
                this.state.values.userSelectedNumber
            )}
          </Text>
        </View>

        <View style={styles.chatQuestion}>
          <Text style={styles.chatText}>{__("AWESOME !")}</Text>
          <Text style={styles.chatText}>
            {__("Your number is activated now ! ")}
          </Text>
        </View>

        <View style={styles.opt}>
          <Button style={styles.optBtn} onPress={() => this.onSave()}>
            <Text style={styles.optBtnText}>{"Login again with your new mobile number to enjoy the "+ APP_DETAILS.APP_NAME +" services."}</Text>
          </Button>
        </View>
      </View>
    );
  }

  renderStatusIcon() {
    // return <Icon name='chat' type='Entypo' />
    return (
      <Image
        source={require("@asset/icons/chatbot.png")}
        style={styles.chatImg}
        resizeMode="contain"
      />
    );
  }

  renderFooter() {
    let footerInput;
    if (this.state.currentStep == "name") {
      footerInput = (
        <TextInput
          placeholder={__("Write your name...")}
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          style={styles.chatInput}
          onChangeText={(v) => this.onChangeValue("nickName", v)}
          value={this.state.values.nickName}
        />
      );
    } else if (this.state.currentStep == "dob") {
      footerInput = (
        <View style={styles.dob}>
          <DatePicker
            value={this.state.values.dob}
            onChange={(v) => this.onChangeValue("dob", v)}
            textStyle={styles.dobInput}
            placeholder={__("Select your DOB")}
          />
        </View>
      );
    } else if (this.state.showNext) {
      return (
        <View style={styles.continue}>
          <Button style={styles.continueBtn} onPress={this.onSubmitStep}>
            <Text style={styles.continueBtnText}>{__("Next")}</Text>
          </Button>
        </View>
      );
    } else if (this.state.showSubmit) {
      return (
        <View style={styles.continue}>
          <Button style={styles.continueBtn} onPress={this.onSave}>
            <Text style={styles.continueBtnText}>{__("Continue")}</Text>
          </Button>
        </View>
      );
    } else {
      return null;
    }
    return (
      <View style={styles.footerBg}>
        <View style={styles.footer}>
          <View style={styles.chatFtr}>
            {/*}<Icon name='emoji-happy' type='Entypo' style={styles.footerIcon} />{*/}
            <Image
              source={require("@asset/icons/emoji.png")}
              style={styles.emojiImg}
            />
          </View>
          <View style={styles.dob}>{footerInput}</View>
          <Button style={styles.footerBtn} onPress={this.onSubmitStep}>
            {/*}<Icon name='send' type='Feather' style={styles.footerBtnIcon} />{*/}
            <Image
              source={require("@asset/icons/send.png")}
              style={styles.sendImg}
              resizeMode="contain"
            />
          </Button>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <LightStatusBar />
        <CustomHeader
          middleContent={
            <View style={styles.headerRow}>
              <Text style={styles.headerTitle}>{__(""+ APP_DETAILS.APP_NAME +"")}</Text>
              <Text style={styles.headerSubTitle}>{__("Chat Assistant")}</Text>
            </View>
          }
        />
        <Content style={styles.layout}>
          <ScrollView style={styles.formContainer}>
            <View>
              {/* DONE */}
              {this.rendeStepWelcome()}
              {this.rendeStepName()}
              {this.rendeStepDob()}

              {/* WORKING */}
              {this.rendeStepInterest()}
              {this.rendeStepSimService()}
              {this.rendeStepStarterPack()}
              {this.rendeStepSimType()}
              {this.rendeStepIdentification()}
              {this.rendeStepSelfie()}
              {this.rendeStepPayment()}
              {this.rendeStepNumbers()}
              {this.rendeStepFinal()}

              {/* {this.renderTest()} */}
              {/* {this.rendeStepSelfieShow()} */}

              {/* TODO */}

              {this.rendeStepS}
            </View>
          </ScrollView>
        </Content>
        {this.renderFooter()}
      </Container>
    );
  }

  async onSave() {
    Support.showLoading();

    try {
      
      navigate("UserLogin")
      // const r = (
      //   await http.post(URLS.SUBSCRIBER_DETAILS_CHATDATA, this.state.values)
      // ).data;

      // await fetchUserSessionInformation();

      // await Support.showSuccess({
      //   message: __("Successfully saved."),
      //   onHide: () => {
      //     navigateCurrent("UserLoginPinCreate");
      //   },
      //   hideDelay: 2500,
      // });
    } catch (e) {
      Support.showServerError(e);
    }

    Support.hideLoading();
  }
}

export default connect(({ session }) => ({ session }), { updateUser })(Chat);
