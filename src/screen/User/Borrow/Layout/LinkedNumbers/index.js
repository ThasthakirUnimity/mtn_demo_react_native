import React from 'react'
import { ScrollView, View } from 'react-native'

import { Text } from '@src/component/Basic'
import styles from './../../styles'
import { __ } from '@src/utility/translation'
import Item from './Item'

const LinkedNumbers = ({ session, selectNumber }) => {
  const renderLinkedNumber = item => (<Item item={item} selectNumber={selectNumber} />)
  const nodes = []
  session.numbers.forEach((r) => {
    if (!r.isPrimary) {
      nodes.push(renderLinkedNumber(r))
    }
  })
  if (nodes.length === 0) {
    return null
  }
  return (
    <>
      <View style={styles.linkHeader}>
        <Text style={styles.linkHeaderTitle}>{__('Choose from your linked account')}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.linkedContent}
      >
        {nodes}
      </ScrollView>
    </>
  )
}

export default LinkedNumbers
