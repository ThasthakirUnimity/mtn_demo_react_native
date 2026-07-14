import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../styles'
import { fetchHelpContent } from '@src/helper/core'
import { helpContentIds } from '@src/config/core'

const Notification = () => {
  const [note, setNote] = useState(null)
  const [visible, setVisible] = useState(true)
  const [showMore, setMore] = useState(false)

  useEffect(() => {
    initiate()
  }, [])

  const initiate = async () => {
    const data = await fetchHelpContent(helpContentIds.BORROW_PAYLATER)
    if (data?.id) {
      setNote({ ...data })
    }
  }

  const toggleMore = () => setMore(!showMore)

  const close = () => {
    setVisible(false)
  }

  if (!visible || !note) {
    return null
  }

  return (
    <View style={styles.alert}>
      <View style={styles.alertHeader}>
        <Text style={styles.alertHeaderTitle}>{note.title}</Text>
        <Button style={styles.alertBtn} onPress={close}>
          <Icon name='close' type='AntDesign' style={styles.alertBtnIcon} />
        </Button>
      </View>
      <View style={styles.alertRow}>
        <Text style={styles.alertDesc}>{showMore ? note.content : note.summary}</Text>
      </View>
      <Button style={styles.alertRow} onPress={toggleMore}>
        <Text style={styles.alertMore}>{__(showMore ? 'Show Less' : 'Know More')}</Text>
        {/* }<Icon name='keyboard-arrow-right' type='MaterialIcons' style={styles.alertMoreIcon} />{ */}
      </Button>
    </View>
  )
}

export default Notification
