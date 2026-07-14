import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'
import theme from '@src/theme/styles'

import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'

const Accordion = ({ title, text, renderContent, onOpened, onClosed, expanded }) => {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    if (opened) {
      onOpened && onOpened()
    } else {
      onClosed && onClosed()
    }
  }, [opened])

  const toggle = () => {
    setOpened(!opened)
  }

  return (
    <View style={styles.accordion}>
      <Button disabled style={styles.accordionBtn} onPress={toggle}>
        <View>
          <Text style={opened ? styles.accordionTitleActive : styles.accordionTitleInactive}>{title}</Text>
        </View>
        <Icon name={opened ? 'keyboard-arrow-down' : 'keyboard-arrow-right'} type='MaterialIcons' style={styles.accordionIcon} />
      </Button>
      {opened ? renderContent() : null}
    </View>
  )
}

export default Accordion