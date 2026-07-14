import React, { useState } from 'react'
import { Text, View } from 'react-native'


import Tabs from './Tabs'
import Movie from './Movie'
import Music from './Music'
import Game from './Game'
import News from './News'

const searchTypeIds = {
  MOVIE: 'movie',
  MUSIC: 'music',
  GAME: 'game',
  NEWS: 'news'
}

const searchTypes = [
  {
    id: searchTypeIds.MOVIE,
    title: 'Movies',
    component: Movie
  },
  {
    id: searchTypeIds.MUSIC,
    title: 'Musics',
    component: Music
  },
  {
    id: searchTypeIds.GAME,
    title: 'Games',
    component: Game
  },
  {
    id: searchTypeIds.NEWS,
    title: 'News',
    component: News
  }
]

const Play = () => {
  const [tabSelected, selectTab] = useState(searchTypes[0])

  const renderContent = () => {
    if (tabSelected.component) {
      const C = tabSelected.component
      return <C />
    }
    return null
  }

  return (
    <View>
      <View>
        <Tabs searchTypes={searchTypes} tabSelected={tabSelected} selectTab={selectTab} />
      </View>
      <View>
        {renderContent()}
      </View>
    </View>
  )
}

export default Play
