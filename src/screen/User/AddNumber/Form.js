import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import styles from './styles'
import { __ } from '@src/utility/translation'

const Form = ({ values, changeNumber, openContacts }) => {
  return (
    <View style={styles.form}>
      <View style={styles.formRow}>
        <View style={styles.formLabel}>
          <Text style={styles.formLabelText}>{__('Enter Phone Number')}</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.formCol}>
            <TextInput
              placeholder=''
              placeholderTextColor='rgba(0, 0, 0, 0.3)'
              value={values.number}
              onChangeText={changeNumber}
              style={styles.formInput}
            />
          </View>

          <Button onPress={openContacts}>
            <Image source={require('@asset/icons/addressbook.png')} resizeMode='contain' />
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Form
