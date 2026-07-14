import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'

const Link = ({ icon, title, onPress }) => {
  return (
    <View style={styles.faqItem}>
      <Button style={styles.faqBtn} onPress={onPress}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {icon ? (<Image source={icon.off} />) : null}
          <Text style={styles.faqBtnText}>{title}</Text>
        </View>
        <Icon name='keyboard-arrow-down' type='MaterialIcons' style={styles.faqBtnIcon} />
      </Button>
    </View>
  )
}

export default Link
