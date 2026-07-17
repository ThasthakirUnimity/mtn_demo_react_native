import React from 'react'
import { FlatList, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'
import HeroCard from './HeroCard'
import { logClickEvent } from '@src/utility/analytics'
import { navigate } from '@src/navigation'

const CallerTunes = (props) => {
  const renderItem = ({ item, index }) => (<Item item={item} index={index} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        horizontal
        contentContainerStyle={styles.ctListContent}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <View style={styles.ctSection}>
      <View style={styles.ctCard}>

        {/* ── Hero card ── */}
        {!props.fetching && props.list && props.list.length > 0 && (
          <HeroCard list={props.list} />
        )}

        {/* ── Caller Tunes list ── */}
        <View style={styles.ctHeader}>
          <Text style={styles.ctTitle}>{__('Caller Tunes')}</Text>
          <Button
            onPress={() => {
              logClickEvent('HomeCallerTunesViewAll')
              navigate('UserCallertuneList')
            }}
          >
            <Text style={styles.headerBtnText}>{__('View All')}</Text>
          </Button>
        </View>
        {renderList()}

      </View>
    </View>
  )
}

export default CallerTunes
