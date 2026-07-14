import React from 'react'
import { Image, ScrollView, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'

import styles from './../styles'

const Item = ({ item, repeatRecentlyShared }) => {
  const _select = () => repeatRecentlyShared(item)
  return (
    <Button style={styles.recentItem} onPress={_select}>
      <View style={styles.recentInitial}>
        <Text style={styles.recentInitialText}>{item.receivername.substring(0, 1)}</Text>
      </View>
      <View style={styles.recentContent}>
        <View style={styles.recentRow}>
          <View style={styles.recentCol}>
            <View style={styles.recentRow}>
              <Text style={styles.recentName}>{item.receivername}</Text>
            </View>
            <View style={styles.recentRow}>
              <Text style={styles.recentNo}>{item.recieverNumber}</Text>
            </View>
          </View>
          <Text style={styles.recentData}>{item.shared}</Text>
        </View>
      </View>
    </Button>
  )
}

const RecentlyShared = ({ recentlyShared, repeatRecentlyShared }) => {
  if (recentlyShared.length == 0) {
    return null
  }
  const renderItem = (item) => (<Item key={item.senderNumber + '-' + item.recieverNumber} item={item} repeatRecentlyShared={repeatRecentlyShared} />)
  return (
    <View style={styles.recent}>
      <View style={styles.recentHeader}>
        <Text style={styles.recentHeaderTitle}>{__('Recently Shared')}</Text>
      </View>
      <View style={styles.recentItems}>
        {recentlyShared.map(renderItem)}
      </View>
    </View>
  )
}

export default RecentlyShared
