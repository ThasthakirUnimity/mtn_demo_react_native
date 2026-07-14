import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'
import http from '@src/utility/http'
import { URLS } from '@src/config/url'

const Categories = ({ openCategory }) => {
  const [fetching, setFetching] = useState(true)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    initiate()
  }, [])

  const initiate = async () => {
    await fetchCategories()
  }

  const fetchCategories = async () => {
    try {
      const r = (await http.get(URLS.BILLS_CATEGORY)).data
      if (Array.isArray(r.rows)) {
        setCategories(r.rows)
        console.log("CATEGORIES",r)
      }
    } catch (e) {}
    setFetching(false)
  }

  const renderItem = ({ item }) => (
    <Item
      item={item}
      openCategory={openCategory}
    />
  )

  const renderList = () => {
    if (fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={renderItem}
        style={{ marginHorizontal: 10 }}
      />
    )
  }

  return (
    <View style={styles.leaderboard}>
      {renderList()}
    </View>
  )
}

export default Categories
