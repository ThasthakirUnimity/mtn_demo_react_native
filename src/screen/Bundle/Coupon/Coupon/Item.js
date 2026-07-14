import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src//utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <View style={styles.coupon}>
        <View style={styles.couponRow}>
          <View>
            <Text style={styles.rewardsText}>{item['rewarders_' + this.props.language] || item.rewarders}</Text>
            <Text style={styles.offerText}>{item['offer_' + this.props.language] || item.offer}</Text>
          </View>
          <Button style={styles.btn}>
            <Text style={styles.btnText}>{__('Apply Now')}</Text>
          </Button>
        </View>
        <View style={styles.couponRow2}>
          <Text style={styles.couponDate}>{item['date_' + this.props.language] || item.date}</Text>
          <Text style={styles.couponCode}>{item['couponCode_' + this.props.language] || item.couponCode}</Text>
        </View>
      </View>
    )
  }
}
