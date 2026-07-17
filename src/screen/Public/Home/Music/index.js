import React from 'react'
import { FlatList, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'
import HeroCard from './HeroCard'
import { logClickEvent } from '@src/utility/analytics'

const Music = (props) => {
  const renderItem = ({ item }) => (<Item item={item} />)

  const renderList = () => {
    if (props.fetching) {
      return <Placeholder />
    }
    return (
      <FlatList
        data={props.list}
        horizontal
        contentContainerStyle={styles.muListContent}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => (item.id)}
      />
    )
  }

  return (
    <View style={styles.muSection}>
      <View style={styles.muCard}>

        {/* ── Hero player card ── */}
        {!props.fetching && props.list && props.list.length > 0 && (
          <HeroCard list={props.list} />
        )}

        {/* ── Music you may like ── */}
        <View style={styles.muHeader}>
          <Text style={styles.muTitle}>{__('Music you may like')}</Text>
          <Button
            onPress={() => {
              logClickEvent('HomeMusicsViewAll')
              navigate('PlayMusicList', { type: 'music' })
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

export default Music
