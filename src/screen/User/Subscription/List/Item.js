import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { Icon, Text } from '@src/component/Basic'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'
import Content from './Content'

const Item = ({ item, type, openedItem, toggleView }) => {
  const opened = openedItem == item.id
  const _toggleView = () => toggleView(item.id, type)

  const renderContent = () => <Content item={item} />

  return (
    <>
      <Button style={styles.accordion} onPress={_toggleView}>
        <View style={styles.accordionCol}>
          <Image source={{ uri: item.image }} style={styles.accordionImg} />
          <View style={styles.accordionContent}>
            <View style={styles.accordionRow}>
              <Text style={styles.accordionTitle}>{item.title}</Text>
            </View>
            <View style={styles.accordionRow}>
              <Text style={styles.accordionText}>{item.validity}</Text>
            </View>
            <View style={styles.accordionRow}>
              <Text style={styles.accordionBtnText}>{__('Renew now')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.accordionRight}>
          <Icon
            name={opened ? 'keyboard-arrow-right' : 'keyboard-arrow-down'}
            type='MaterialIcons'
            style={styles.accordionIcon}
          />
        </View>
      </Button>
      {opened && renderContent()}
    </>
  )
}

export default Item
