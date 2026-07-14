import React from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button, Checkbox } from '@src/component/Form'
import Accordion from './Accordion'
import styles from './../styles'

const Item = ({
  item,
  selectedList,
  addToCart,
  removeFromCart
}) => {
  const selected = !!selectedList[item.ProductID]

  const toggle = () => {
    selected ? removeFromCart(item) : addToCart(item)
  }

  return (
    <Accordion
      title={item.ProductName}
      renderContent={() => (
        <View>
          <Button
            style={styles.voiceBundle}
            onPress={toggle}
          >
            <View>
              <Text style={styles.buildText}>{item.currency}{item.Price}</Text>
              <Text style={styles.voiceData}>
                {item.Description}
              </Text>
            </View>
            <Checkbox
              onChange={toggle}
              checked={selected}
              color='black'
            />
          </Button>
        </View>
      )}
    />
  )
}

export default Item
