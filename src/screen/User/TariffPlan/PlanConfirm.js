import React from "react";
import { View } from "react-native";
import Modal from "react-native-modalbox";

import { Icon, Text } from "@src/component/Basic";
import { Button } from "@src/component/Form";
import { bind } from "@src/utility/component";
import styles from "./styles";

import { httpMockNew2 } from "@src/utility/http";
import { URLS } from "@src/config/url";
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'

class PlanConfirm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    bind(this);

    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.submitConfirm = this.submitConfirm.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  onOpened() {
    this.setState({
      isOpened: true,
    });
  }

  onClosed() {
    this.setState({
      isOpened: false,
    });
  }

  async open() {
    await this.refModal.open();
  }

  async close() {
    await this.refModal.close();
  }

  submitConfirm () {
    this.close()
    this.props.submitConfirm()
  }

  renderContent() {
    return (
      <>
        <View style={styles.modalPlanHeader}>
          <Text style={styles.headerText}>
            Are You sure you want to upgrade your plan to My {APP_DETAILS.APP_NAME } Plan?
          </Text>
          <Text style={styles.headerText2}>
            * Note that you will lose your existing plan associated with the
            package plus
          </Text>
        </View>
        <View style={styles.modalplanContent}>
          <View style={styles.planDetail}>
            <View>
              <Text style={styles.mtnplusText}>
                {this.props.selectedPlan.title}
              </Text>
              <Text style={styles.planPrice}>
                {this.props.selectedPlan.currency}{' '}
                {this.props.selectedPlan.price}/
                {this.props.selectedPlan.plantype}
              </Text>
              <Text style={styles.saveText}>
                {this.props.selectedPlan.info}
              </Text>
            </View>
          </View>
          <View style={styles.planFacility}>
            <View style={styles.planFacilityRow}>
              <Icon style={styles.facilityIcon} name='wifi' type='Feather' />
              <Text style={styles.dataFacilityText}>Internet</Text>
            </View>
            <Text style={styles.dataFacilityText}>
              {this.props.selectedPlan.internet}
            </Text>
          </View>
          <View style={styles.planFacility}>
            <View style={styles.planFacilityRow}>
              <Icon
                style={styles.facilityIcon}
                name='ios-speedometer-outline'
                type='Ionicons'
              />
              <Text style={styles.dataFacilityText}>Speed</Text>
            </View>
            <Text style={styles.dataFacilityText}>
              {this.props.selectedPlan.speed}
            </Text>
          </View>
          <View style={styles.planFacility}>
            <View style={styles.planFacilityRow}>
              <Icon
                style={styles.facilityIcon}
                name='call-outline'
                type='Ionicons'
              />
              <Text style={styles.dataFacilityText}>Calls</Text>
            </View>
            <Text style={styles.dataFacilityText}>
              {this.props.selectedPlan.calls}
            </Text>
          </View>
        </View>
        <Button style={styles.confirmBtn} onPress={this.submitConfirm}>
          <Text style={styles.confirmBtnText}>Confirm</Text>
        </Button>
      </>
    )
  }

  render() {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='bottom'
        backButtonClose
        backdropPressToClose
        swipeToClose={false}
        style={styles.modalPlans}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}

export default PlanConfirm
