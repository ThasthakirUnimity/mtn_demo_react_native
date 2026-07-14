import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import { Text } from '@src/component/Basic'
import { helpContentIds } from '@src/config/core'
import { fetchHelpContent } from '@src/helper/core'

import styles from './../styles'

const Notes = () => {
  const [note, setNote] = useState(null)

  useEffect(() => {
    initiate()
  }, [])

  const initiate = async () => {
    const data = await fetchHelpContent(helpContentIds.SHARE_CONTENT)
    if (data?.id) {
      setNote(data)
    }
  }

  if (!note) {
    return null
  }

  return (
    <View style={styles.shareNote}>
      <Text style={styles.shareNoteText}>{note.content}</Text>
    </View>
  )
}

export default Notes
