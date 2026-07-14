import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text, Icon } from '@src/component/Basic'
import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles'
import { navigate } from '@navigation'
import { __ } from '@src/utility/translation'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <View style={styles.insuranceContent}>
        <View style={styles.insuranceContent2}>
          <View style={styles.insuranceDetail}>
            <View>
              <Text style={styles.insuranceText}>{item.title}</Text>
              <Text style={styles.insuranceDesc}>{item.field_sub_title}</Text>
            </View>
            <View style={styles.priceDetail}>
              <Text text='light' size='text22' color='default' style={styles.insuranceText2}>{item.field_loan}</Text>
              {/* <Text style={styles.insurancePremium}>Monthly</Text> */}
            </View>
          </View>
          <Image source={{ uri: item.field_image }} resizeMode='contain' style={styles.insuranceImg} />
        </View>
      </View>

    )
  }
}
