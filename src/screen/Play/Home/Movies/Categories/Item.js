import React from 'react'
import { Text, Image } from 'react-native'

import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../../styles'
import { logClickEvent } from '@src/utility/analytics'

const Item = ({ selectedCategory, category, onSelect }) => {
  const selected = selectedCategory === category.id
  const _onPress = () => {
    logClickEvent('PlayServiceMovieTab', {
      title: category.title
    })
    onSelect(category.id)
  }
  return (
    <Button style={selected ? styles.boxTabActive : styles.boxTab} onPress={_onPress}>
      <Image source={category.icon} resizeMode='contain' style={selected ? styles.boxTabActiveImg : styles.boxTabImg} />
      <Text style={selected ? styles.boxTabActiveText : styles.boxTabText}>{__(category.title)}</Text>
    </Button>
  )
}

export default Item
