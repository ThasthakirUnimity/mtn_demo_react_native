import React from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content } from '@src/component/Basic'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import theme from '@src/theme/styles'
import { applyComponentFeatures } from '@src/utility/core'
import http, { httpCms, httpMovie, httpMusic, httpNews } from '@src/utility/http'
import { __ } from '@src/utility/translation'

import Games from './Games'
import Trending from './Trending'
import Music from './Music'
import Movies from './Movies'
import Channels from './Channels'
import News from './News'
import Categories from './Categories'
import { refineNews } from '@src/helper/news'
import { logClickEvent } from '@src/utility/analytics'

const categories = [
  {
    id: 'all',
    title: 'All',
    icon: require('@asset/icons/services/games.png')
  },
  {
    id: 'games',
    title: 'Games',
    icon: require('@asset/icons/services/games.png'),
    img: 'https://images.pexels.com/photos/159655/quarterback-american-football-football-player-passer-159655.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'movies',
    title: 'Movies',
    icon: require('@asset/icons/services/movies.png'),
    img: 'https://images.pexels.com/photos/7991133/pexels-photo-7991133.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'music',
    title: 'Music',
    icon: require('@asset/icons/services/music.png'),
    img: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'news',
    title: 'News',
    icon: require('@asset/icons/services/news.png'),
    img: 'https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]

const movieCategories = [
  {
    id: 'movies',
    title: 'Movies',
    icon: require('@asset/icons/services/games.png')
  },
  {
    id: 'liveTv',
    title: 'Live TV',
    icon: require('@asset/icons/services/movies.png')
  }
]

class PlayService extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedCategory: 'all',
      selectedMovieCategory: 'movies',

      games: [],
      fetchingGames: true,

      trending: [],
      fetchingTrending: true,

      music: [],
      fetchingMusic: true,

      movies: [],
      fetchingMovies: true,

      liveTv: [],
      fetchingLiveTv: true,

      channels: [],
      fetchingChannels: true,

      news: [],
      fetchingNews: true
    }

    applyComponentFeatures(this)

    this.fetchGames = this.fetchGames.bind(this)
    this.fetchTrending = this.fetchTrending.bind(this)
    this.fetchMusic = this.fetchMusic.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
    this.fetchLiveTv = this.fetchLiveTv.bind(this)
    this.fetchChannels = this.fetchChannels.bind(this)
    this.fetchNews = this.fetchNews.bind(this)
    this.onSelectCategory = this.onSelectCategory.bind(this)
    this.onSelectMovieCategory = this.onSelectMovieCategory.bind(this)
  }

  async componentDidMount () {
    await this.fetchGames()
    await this.fetchTrending()
    await this.fetchMusic()
    await this.fetchMovies()
    await this.fetchLiveTv()
    await this.fetchChannels()
    await this.fetchNews()
  }

  async fetchGames () {
    try {
      const r = (await http.get(URLS.GAMES)).data
      if (Array.isArray(r.records)) {
        await this.promisedSetState({
          games: r.records
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingGames: false
    })
  }

  async fetchTrending () {
    try {
      const params = {}
      params.page = 1
      const r = (await httpMovie.get(URLS.MOVIE_POPULAR, { params })).data
      if (Array.isArray(r.results)) {
        await this.promisedSetState({
          trending: r.results
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingTrending: false
    })
  }

  async fetchMusic () {
    try {
      const params = {}
      const r = (await httpCms.get(URLS.MUSIC_LIST, { params })).data

      if (Array.isArray(r)) {
        await this.promisedSetState({
          music: r
        })
      }
    } catch (e) {
      console.log(e)
    }
    await this.promisedSetState({
      fetchingMusic: false
    })
  }

  async fetchMovies () {
    try {
      const params = {}
      params.page = 1
      const r = (await httpMovie.get(URLS.MOVIE_LIST, { params })).data
      if (Array.isArray(r.results)) {
        await this.promisedSetState({
          movies: r.results
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingMovies: false
    })
  }

  async fetchLiveTv () {
    try {
      const params = {}
      params.page = 1
      const r = (await httpMovie.get(URLS.MOVIE_LIVE_TV, { params })).data
      if (Array.isArray(r.results)) {
        await this.promisedSetState({
          liveTv: r.results
        })
      }
    } catch (e) {}
    await this.promisedSetState({
      fetchingLiveTv: false
    })
  }

  async fetchChannels () {
    try {
      const r = (await httpCms.get(URLS.PLAY_PRODUCT_CHANNELS)).data
      await this.promisedSetState({
        channels: r.rows
      })
    } catch (e) {}
    await this.promisedSetState({
      fetchingChannels: false
    })
  }

  async fetchNews () {
    try {
      const params = {
        category: 'business'
      }
      const r = (await httpNews.get(URLS.NEWS_HEADLINES, { params })).data

      if (Array.isArray(r.articles)) {
        const list = [...new Set(r.articles.map(refineNews))]
        const news = []
        let divider = 3
        if (divider < list.length) {
          divider = Math.ceil(list.length / 3)
        }
        while (list.length) {
          news.push(list.splice(0, divider))
        }
        await this.promisedSetState({
          news
        })
      }
    } catch (e) {
      console.log(e)
    }
    await this.promisedSetState({
      fetchingNews: false
    })
  }

  onSelectCategory (id, title) {
    logClickEvent('PlayServiceTab', {
      title
    })
    this.setState({ selectedCategory: id })
  }

  onSelectMovieCategory (id) {
    this.setState({ selectedMovieCategory: id })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={__('Play Service')}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories
              selectedCategory={this.state.selectedCategory}
              list={categories}
              onSelect={this.onSelectCategory}
            />

            <View>
              <Games
                selectedCategory={this.state.selectedCategory}
                list={this.state.games}
                fetching={this.state.fetchingGames}
              />
              <Trending
                selectedCategory={this.state.selectedCategory}
                list={this.state.trending}
                fetching={this.state.fetchingTrending}
              />
              <Music
                selectedCategory={this.state.selectedCategory}
                list={this.state.music}
                fetching={this.state.fetchingMusic}
              />
              <Movies
                selectedTopCategory={this.state.selectedCategory}
                selectedCategory={this.state.selectedMovieCategory}
                categories={movieCategories}
                movies={this.state.movies}
                liveTv={this.state.liveTv}
                fetchingMovies={this.state.fetchingMovies}
                fetchingLiveTv={this.state.fetchingLiveTv}
                onSelectCategory={this.onSelectMovieCategory}
              />
              <Channels
                selectedCategory={this.state.selectedCategory}
                list={this.state.channels}
                fetching={this.state.fetchingChannels}
              />
              <News
                selectedCategory={this.state.selectedCategory}
                list={this.state.news}
                fetching={this.state.fetchingNews}
              />
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(PlayService)
