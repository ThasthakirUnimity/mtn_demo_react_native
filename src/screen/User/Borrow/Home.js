import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'

import styles from './styles'
import { logClickEvent } from '@src/utility/analytics'
import { fetchHelpContent } from '@src/helper/core'
import { helpContentIds } from '@src/config/core'

const Item = ({ item, select }) => {
  const _select = () => {
    logClickEvent('BorrowType', {
      title: item.title
    })
    select(item.id)
  }
  return (
    <Button
      style={styles.cardBtn}
      onPress={_select}
    >
      <Image source={item.icon} style={styles.cardBtnImg} resizeMode='contain' />
      <Text style={styles.cardBtnText}>{__(item.title)}</Text>
    </Button>
  )
}

const Home = ({ shareTypes, select }) => {
  const [note, setNote] = useState(null)

  useEffect(() => {
    initiate()
  }, [])

  const initiate = async () => {
    const data = await fetchHelpContent(helpContentIds.BORROW_NOTE)
    if (data?.id) {
      setNote(data)
    }
  }

  const renderType = (item) => (<Item key={item.id} item={item} select={select} />)
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>{__('Borrow Data and Airtime')}</Text>
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.headerSubTitle}>{__('Anytime, whenever you want')}</Text>
        </View>
      </View>

      <View style={styles.card}>
        {shareTypes.map(renderType)}
      </View>

      {
        note && (
          <View>
            <Text style={styles.cardDesc}>{note?.content}</Text>
          </View>
        )
      }
    </>
  )
}

export default Home
