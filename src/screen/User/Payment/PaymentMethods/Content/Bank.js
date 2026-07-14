import React from 'react'
import { Image, View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../../styles'

const IconInactive = () => <Icon name='checkbox-blank-circle-outline' type='MaterialCommunityIcons' style={styles.paySubBtnIcon} />

const IconActive = () => <Icon name='record-circle-outline' type='MaterialCommunityIcons' style={styles.paySubBtnIconActive} />

const Bank = ({ bankAccounts, values, selectBank }) => {
  const renderItem = (item) => {
    const selected = values?.bank?.number == item.number
    const _selectBank = () => selectBank(item.number)

    return (
      <Button style={styles.paySubBtn} onPress={_selectBank}>
        <View style={styles.paySubCol}>
          <Image source={item.icon} resizeMode='contain' style={styles.paySubImg} />
          <Text style={styles.paySubBtnText}>{item.number}</Text>
        </View>
        {selected ? <IconActive /> : <IconInactive />}
      </Button>
    )
  }
  return (
    <View style={styles.payOpen}>
      {bankAccounts.map(renderItem)}

      <Button style={styles.payAddBtn}>
        <Icon name='pluscircleo' type='AntDesign' style={styles.payAddBtnIcon} />
        <Text style={styles.payAddBtnText}>{__('Add New Card')}</Text>
      </Button>
    </View>
  )
}

export default Bank
