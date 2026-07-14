import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import styles from '../../../styles'
import Item from './Item'
import Placeholder from './Placeholder'
import http from '@src/utility/http'
import { URLS } from '@src/config/url'
import { __ } from '@src/utility/translation'
import Number from './Number'
import Support from '@src/component/Support'

const Main = ({ selectNumber }) => {
  const [fetching, setFetching] = useState(true)
  const [savedList, setSavedList] = useState([])

  useEffect(() => {
    initiate()
  }, [])

  const initiate = async () => {
    await fetchSavedList()
  }

  const fetchSavedList = async () => {
    try {
      const r = (await http.get(URLS.BILLS_EB_LIST)).data
      if (Array.isArray(r.rows)) {
        setSavedList(r.rows)
      }
    } catch (e) {}
    setFetching(false)
  }

  const removeNumber = ({ meternumber }) => {
    const deletion = async () => {
      await Support.showLoading()
      try {
        const r = (await http.delete(URLS.BILLS_EB + '/' + meternumber)).data

        const list = [...savedList]
        const index = list.findIndex(item => (item.meternumber == meternumber))
        if (index > -1) {
          list.splice(index, 1)
          setSavedList(list)
        }

        await Support.showSuccess({
          layout: 'toast',
          message: r?.response?.message || __('Removed'),
          hideDelay: 2500
        })
      } catch (e) {}
      await Support.hideLoading()
    }
    Support.showConfirm({
      title: __('Alert!'),
      message: __('Are you sure you want to delete this?'),
      onYes: deletion
    })
  }

  const renderItem = ({ item }) => (
    <Item
      item={item}
      select={selectNumber}
      remove={removeNumber}
    />
  )

  const renderList = () => {
    if (fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={savedList}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    )
  }

  return (
    <View style={styles.buy}>
      <Number onVerified={selectNumber} />

      <View style={styles.eb}>
        <View style={styles.ebHeader}>
          <Text style={styles.ebHeaderTitle}>{__('Select from your saved prepaid eletricity numbers')}</Text>
        </View>
        {renderList()}
      </View>
    </View>
  )
}

export default Main
