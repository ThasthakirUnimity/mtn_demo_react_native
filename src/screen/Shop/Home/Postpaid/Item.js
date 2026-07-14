import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import styles from '../styles'

const Item = ({ item }) => {
  return (
    <View style={styles.postpaidContent}>
      <Button
        style={styles.postpaidDisplay}
        onPress={() => navigate('UserPostpaidList')}
      >
        <View>
          <Text style={styles.postpaidText}>{item.title}</Text>
          <Text style={styles.planText}>{item.info}</Text>
          <Text style={styles.postpaidPlan}>{item.data}</Text>
          <Text style={styles.postpaidScheme}>{item.currency}{item.price}</Text>
        </View>

        <Image source={item.image} style={styles.postpaidImg} resizeMode='contain' />
      </Button>
    </View>
  )
}

export default Item
