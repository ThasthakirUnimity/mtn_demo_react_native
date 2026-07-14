import React from 'react'
import { Image, View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../../styles'

const IconInactive = () => <Icon name='checkbox-blank-circle-outline' type='MaterialCommunityIcons' style={styles.paySubBtnIcon} />

const IconActive = () => <Icon name='record-circle-outline' type='MaterialCommunityIcons' style={styles.paySubBtnIconActive} />

const Card = ({ cardNumbers, values, selectCard, onChangeCardCvv, validateCardCvv }) => {
  const renderItem = (item) => {
    const selected = values?.card?.number == item.number
    const _selectCard = () => selectCard(item.number)

    const renderDetails = () => {
      if (!selected) {
        return null
      }
      return (
        <View style={styles.payCard}>
          <View style={styles.payCardSpace} />
          <View style={styles.payCardRow}>
            <View style={styles.payCardCol}>
              <TextInput
                keyboardType='numeric'
                maxLength={3}
                placeholder='CVV'
                style={styles.payCardInput}
                value={values?.card?.cvv}
                onChangeText={onChangeCardCvv}
              />
            </View>
            {
                            values?.card?.passed
                              ? (
                                <View style={styles.payCardCheck}>
                                  <Icon name='check-circle-fill' type='Octicons' style={styles.payCardIcon} />
                                </View>
                                )
                              : (
                                <Button style={styles.payCardBtn} onPress={validateCardCvv}>
                                  <Text style={styles.payCardBtnText}>{__('Pay')} N156</Text>
                                </Button>
                                )
                        }
          </View>
        </View>
      )
    }
    return (
      <>
        <Button style={styles.paySubBtn} onPress={_selectCard}>
          <View style={styles.paySubCol}>
            <Image source={item.icon} resizeMode='contain' style={styles.paySubImg} />
            <Text style={styles.paySubBtnText}>{item.number}</Text>
          </View>
          {selected ? <IconActive /> : <IconInactive />}
        </Button>
        {renderDetails()}
      </>
    )
  }
  return (
    <View style={styles.payOpen}>
      {cardNumbers.map(renderItem)}

      {/* }
            <View style={styles.payCard}>
                <View style={styles.payCardSpace} />
                <View style={styles.payCardRow}>
                    <View style={styles.payCardCol}>
                        <TextInput placeholder='CVV' style={styles.payCardInput} />
                    </View>
                    <Button style={styles.payCardBtn}>
                        <Text style={styles.payCardBtnText}>{__('Pay')} N156</Text>
                    </Button>
                    <View style={styles.payCardCheck}>
                        <Icon name='check-circle-fill' type='Octicons' style={styles.payCardIcon} />
                    </View>
                </View>
            </View>
            { */}

      <Button style={styles.payAddBtn}>
        <Icon name='pluscircleo' type='AntDesign' style={styles.payAddBtnIcon} />
        <Text style={styles.payAddBtnText}>{__('Add New Card')}</Text>
      </Button>
    </View>
  )
}

export default Card
