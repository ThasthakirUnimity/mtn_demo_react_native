import React from 'react'
import { View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../styles'
import ContentCard from './Content/Card'
import ContentBank from './Content/Bank'

const contents = {
  card: ContentCard,
  bank: ContentBank
}

const IconInactive = () => <Icon name='checkbox-blank-circle-outline' type='MaterialCommunityIcons' style={styles.payBtnIcon} />

const IconActive = () => <Icon name='record-circle-outline' type='MaterialCommunityIcons' style={styles.payBtnIconActive} />

const Item = ({ item, index, cardNumbers, bankAccounts, values, selectedPaymentMethod, selectPaymentMethod, selectCard, onChangeCardCvv, validateCardCvv, selectBank }) => {
  const selected = selectedPaymentMethod == item.id

  const _selectPaymentMethod = () => selectPaymentMethod(item.id)

  const styleMain = [styles.payBtn]
  if (index === 0) {
    styleMain.push(styles.payBtnEmpty)
  }
  const RightComponent = item.RightComponent

  const renderContent = () => {
    const Content = contents[item.id]
    return Content && <Content
      cardNumbers={cardNumbers}
      bankAccounts={bankAccounts}
      values={values}
      selectCard={selectCard}
      onChangeCardCvv={onChangeCardCvv}
      validateCardCvv={validateCardCvv}
      selectBank={selectBank}
                      />
  }

  return (
    <>
      <Button style={styleMain} onPress={_selectPaymentMethod}>
        <View style={styles.payCol}>
          {selected ? <IconActive /> : <IconInactive />}
          <Text style={styles.payBtnText}>{__(item.name)}</Text>
        </View>
        {RightComponent && <RightComponent />}
      </Button>
      {/* selected && renderContent() */}
    </>
  )
}

export default Item
