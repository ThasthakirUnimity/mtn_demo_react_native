import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'

import styles from '../styles'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import { Button } from '@src/component/Form'

export default class extends React.Component {
  render() {
    const item = this.props.item

    return (
      <Button style={styles.storeContain}>
        <Image source={{uri: item}} style={styles.storeImg}  />
      </Button>

    )
  }
}
