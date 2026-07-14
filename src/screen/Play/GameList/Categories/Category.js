import React from 'react'
import { Text } from 'react-native'

import { __ } from '@src/utility/translation'
import styles from './../styles'
import { Button } from '@src/component/Form'
import { logClickEvent } from '@src/utility/analytics'

const Category = ({ selectedCategory, category, onSelect }) => {
  const selected = selectedCategory === category.id
  const _onPress = () => {
    logClickEvent('PlayServiceGamesTab', {
      title: category.name
    })
    onSelect(category.id)
  }
  return (
    <Button style={selected ? styles.boxTabActive : styles.boxTab} onPress={_onPress}>
      {/* <Image source={category.icon} resizeMode='contain' style={selected ? styles.boxTabActiveImg : styles.boxTabImg} /> */}
      <Text style={selected ? styles.boxTabActiveText : styles.boxTabText}>{__(category.name)}</Text>
    </Button>
  )
}

export default Category
