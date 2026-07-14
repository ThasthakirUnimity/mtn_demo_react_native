import { Button } from '@src/component/Form'
import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Item = ({ contact, select }) => {
  const _select = () => select(contact)
  return (
    <Button style={styles.item} onPress={_select}>
      <View style={styles.itemGroup}>
        <Text style={styles.itemInitial}>{contact.givenName.substring(0, 1)}</Text>
      </View>
      <View style={styles.itemCol}>
        <Text style={styles.itemName}>{`${contact.givenName} ${contact.familyName}`}</Text>
        <Text style={styles.itemNo}>{contact.phoneNumbers[0].number}</Text>        
      </View>
    </Button>
  )
}

export default Item
