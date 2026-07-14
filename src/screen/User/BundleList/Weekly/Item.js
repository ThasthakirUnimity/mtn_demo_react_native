import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import theme from '@src/theme/styles'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <Button style={styles.weeklyContent2} onPress={() => {
        navigate('PublicMenuList')
      }}>

        <View style={styles.rechargePlans}>
          <View style={styles.layout}>
            <View style={theme.row}>
              <Text style={styles.validityText}>{item['validity_' + this.props.language] || item.validity}</Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.limitedText}>{item['hrs_' + this.props.language] || item.hrs}</Text>
            </View>
          </View>
          <View style={styles.layout}>
            <View style={theme.row}>
              <Text style={styles.validityText}>{item['data_' + this.props.language] || item.data}</Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.limitedText}>{item['mb_' + this.props.language] || item.mb}</Text>
            </View>
          </View>
          <View style={styles.layout}>
            <View style={theme.row}>
              <Text style={styles.validityText}>{item['calls_' + this.props.language] || item.calls}</Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.limitedText}>{item['limited_' + this.props.language] || item.limited}</Text>
            </View>
          </View>
          <Text style={styles.planText}>{item['plan_' + this.props.language] || item.plan}</Text>
        </View>
        <View style={styles.weeklyPrice}>
          <Text style={styles.detailText}>{__('Details')}</Text>
          <View style={styles.weeklyPriceInfo}>
            <Button style={styles.cartBtn}>
              <Text style={styles.cartText}>{__('Add to Cart')}</Text>
            </Button>
            <Button style={styles.buyBtn}>
              <Text style={styles.buyText}>{__('Buy Now')}</Text>
            </Button>
          </View>
        </View>

      </Button>

    )
  }
}
