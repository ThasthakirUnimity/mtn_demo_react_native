import React from 'react'
import { View, Text } from 'react-native'

import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import Categories from './Categories'
import Movies from './Movies'
import styles from '../styles'
import LiveTv from './LiveTv'
import { logClickEvent } from '@src/utility/analytics'

const MoviesSection = (props) => {
  if (!(props.selectedTopCategory === 'all' || props.selectedTopCategory === 'movies')) {
    return null
  }
  const renderList = () => {
    if (props.selectedCategory == 'movies') {
      return (
        <Movies
          list={props.movies}
          fetching={props.fetchingMovies}
        />
      )
    } else if (props.selectedCategory == 'liveTv') {
      return (
        <LiveTv
          list={props.liveTv}
          fetching={props.fetchingLiveTv}
        />
      )
    }

    return null
  }

  return (
    <>
      <View style={styles.playserviceRow}>
        <View style={styles.boxTabs}>
          <Categories
            list={props.categories}
            selectedCategory={props.selectedCategory}
            onSelect={props.onSelectCategory}
          />
        </View>
        <Button
          onPress={() => {
            if (props.selectedCategory == 'movies') {
              logClickEvent('PlayServiceMovieViewAll')
              navigate('PlayMovieList', { type: 'movie' })
            } else if (props.selectedCategory == 'liveTv') {
              logClickEvent('PlayServiceLiveTvViewAll')
              navigate('PlayLiveTvList', { type: 'movie' })
            }
          }}
        >
          <Text style={styles.headerBtnText}>{__('View All')}</Text>
        </Button>
      </View>
      <View>
        {renderList()}
      </View>
    </>
  )
}

export default MoviesSection
