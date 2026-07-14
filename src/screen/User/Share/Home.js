import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './styles'
import { logClickEvent } from '@src/utility/analytics'
import { fetchHelpContent } from '@src/helper/core'
import { helpContentIds } from '@src/config/core'

const Item = ({ item, noteData, noteAirtime, select }) => {
  const _select = () => {
    logClickEvent('ShareType', {
      title: item.title
    })
    select(item.id)
  }

  const renderNote = () => {
    let note
    if (item.id == 'data') {
      note = noteData
    } else if (item.id == 'airtime') {
      note = noteAirtime
    }
    if (!note) {
      return null
    }
    return <Text key={item.id} style={styles.cardDesc}>{__(note.content)}</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <Button
        style={styles.cardBtn}
        onPress={_select}
      >
        <Image source={item.icon} style={styles.cardBtnImg} resizeMode='contain' />
        <Text style={styles.cardBtnText}>{__(item.title)}</Text>
      </Button>
      {renderNote()}
    </View>
  )
}

const Home = ({ shareTypes, select }) => {
  const [noteData, setNoteData] = useState(null)
  const [noteAirtime, setNoteAirtime] = useState(null)

  useEffect(() => {
    initiate()
  }, [])

  const initiate = async () => {
    const data = await fetchHelpContent(helpContentIds.SHARE_DATA)
    if (data?.id) {
      setNoteData(data)
    }
    const airtime = await fetchHelpContent(helpContentIds.SHARE_AIRTIME)
    if (airtime?.id) {
      setNoteAirtime(airtime)
    }
  }

  const renderType = (item) => (
    <Item
      key={item.id}
      item={item}
      noteData={noteData}
      noteAirtime={noteAirtime}
      select={select}
    />
  )

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>{__('Share Data and Airtime')}</Text>
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.headerSubTitle}>{__('Anytime, whenever you want')}</Text>
        </View>
      </View>

      <View style={styles.card}>
        {shareTypes.map(renderType)}
      </View>
    </>
  )
}

export default Home
