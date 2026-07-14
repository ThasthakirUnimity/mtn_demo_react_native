import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import styles from './styles'

const Accordion = ({ icon, title, renderContent, onOpened, onClosed }) => {
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
    <View style={styles.faqItem}>
      <Button style={styles.faqBtn} onPress={toggle}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {icon ? (<Image source={opened ? icon.on : icon.off} />) : null}
          <Text style={opened ? styles.faqBtnTextActive : styles.faqBtnText}>{title}</Text>
        </View>
        <Icon name={opened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} type='MaterialIcons' style={styles.faqBtnIcon} />
      </Button>
      {opened ? renderContent() : null}
    </View>
  )
}

export default Accordion
