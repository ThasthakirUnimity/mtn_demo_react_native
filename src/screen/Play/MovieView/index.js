import React, { createRef } from 'react'
import {
  Image,
  ScrollView,
  StatusBar,
  View
} from 'react-native'

import { Container, Content, Text, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import { httpMovie } from '@src/utility/http'
import styles from './styles'
import Placeholder from './Placeholder'
import { URLS } from '@src/config/url'
import { compile } from 'path-to-regexp'
import { goBack } from '@src/navigation'
import { MOVIE_ASSET_PATH } from '@src/config/env'
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient'
import Player from './Player'

class MovieView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      languageSelect: 'english',
      fetchingMovie: true,
      movie: {},
      pageError: false
    }

    bind(this)

    this.fetchMovie = this.fetchMovie.bind(this)
    this.openPlayer = this.openPlayer.bind(this)
    this.renderView = this.renderView.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.renderError = this.renderError.bind(this)

    this.refPlayer = createRef()
  }

  async componentDidMount () {
    await this.fetchMovie()
  }

  async fetchMovie () {
    const fm = async () => {
      const url = compile(URLS.MOVIE_ID)({ id: this.props.route.params.id })
      const movie = (await httpMovie.get(url)).data
      if (typeof movie === 'object') {
        movie.release_year = moment(movie.release_date).format('YYYY')
        await this.promisedSetState({
          movie
        })
      } else {
        await this.promisedSetState({
          pageError: true
        })
      }
    }
    const fv = async () => {
      const url = compile(URLS.MOVIE_ID_VIDEOS)({
        id: this.props.route.params.id
      })
      const r = (await httpMovie.get(url)).data
      const youtube = r.results.find(r => r.site == 'YouTube')
      console.log(youtube)
      if (youtube) {
        await this.promisedSetState({
          movie: { ...this.state.movie, youtube: youtube.key }
        })
      }
    }
    await this.promisedSetState({
      fetchingMovie: true
    })
    try {
      fm()
      fv()
    } catch (e) {
      await this.promisedSetState({
        pageError: true
      })
    }
    await this.promisedSetState({
      fetchingMovie: false
    })
  }

  openPlayer () {
    if (this.state.movie?.youtube) {
      this.refPlayer.current.open()
    }
  }

  renderView () {
    return (
      <ScrollView style={styles.formContainer}>
        <ScrollView
          horizontal
          style={styles.language}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.movie?.spoken_languages?.map(language => (
            <Button
              key={language.name}
              style={
                this.state.languageSelect === 'english'
                  ? styles.fBtnActive
                  : styles.fBtn
              }
              onPress={() => this.setState({ languageSelect: 'english' })}
            >
              <Text
                style={
                  this.state.languageSelect === 'english'
                    ? styles.fBtnTextActive
                    : styles.fBtnText
                }
              >
                {language.name}
              </Text>
            </Button>
          ))}
        </ScrollView>
        <View style={styles.watchContent}>
          <View style={styles.movieImg}>
            <Image
              source={{ uri: MOVIE_ASSET_PATH + this.state.movie.backdrop_path }}
              style={styles.watchMovieImg}
            />
          </View>
          <View style={styles.watchContent1}>
            <View style={theme.row}>
              <Text style={styles.movieTitle} numberOfLines={1}>
                {this.state.movie.title}
              </Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.movieData}>
                IMDb {this.state.movie.vote_average}
              </Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.movieData}>
                {this.state.movie.release_year}
              </Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.movieData}>Fantasy U/A</Text>
            </View>
          </View>
        </View>
        <Text style={styles.movieText} numberOfLines={4}>
          {this.state.movie.overview}
        </Text>
        {/* }
        <View style={styles.btnRow}>
          <Button style={styles.btn}>
            <Icon style={styles.btnIcon} name='download' type='AntDesign' />
            <Text style={styles.btnText}>{__('Download')}</Text>
          </Button>
          <Button style={styles.btn}>
            <Icon style={styles.btnIcon} name='minus' type='AntDesign' />
            <Text style={styles.btnText}>{__('WatchList')}</Text>
          </Button>
          <Button style={styles.btn}>
            <Icon
              style={styles.btnIcon}
              name='share'
              type='MaterialCommunityIcons'
            />
            <Text style={styles.btnText}>{__('Share')}</Text>
          </Button>
        </View>
        { */}
        <View style={styles.trailer}>
          <Text style={styles.trailerText}>{__('Trailers & Extras')}</Text>
          <Image
            source={{ uri: MOVIE_ASSET_PATH + this.state.movie.backdrop_path }}
            style={styles.watchMovieImg}
          />
        </View>
      </ScrollView>
    )
  }

  renderHeader () {
    return (
      <>
        <StatusBar backgroundColor='(rgba(0,0,0,1 )' />
        <Button style={styles.watchContainer} onPress={this.openPlayer}>
          <Image
            source={{ uri: MOVIE_ASSET_PATH + this.state.movie.poster_path }}
            style={styles.watchImg}
          />
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 1)',
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 1)'
            ]}
            style={styles.watchOverlay}
          >
            <View style={styles.watchHeader}>
              <Button style={styles.watchHeaderBtn} onPress={goBack}>
                <Icon
                  style={styles.backIcon}
                  name='chevron-left'
                  type='Entypo'
                />
              </Button>
              <Button style={styles.watchHeaderBtn}>
                <Icon
                  style={styles.backIcon}
                  name='scan-outline'
                  type='Ionicons'
                />
              </Button>
            </View>
            <View style={styles.watchBot}>
              <View style={styles.watchBotBtn}>
                <Icon
                  name='play'
                  type='Ionicons'
                  style={styles.watchBotBtnIcon}
                />
              </View>
              <View style={styles.watchBotCol}>
                <Text style={styles.playWatch}>{__('Watch')}</Text>
                <Text style={styles.playDuration}>2hr 38m</Text>
              </View>
            </View>
          </LinearGradient>
        </Button>
      </>
    )
  }

  renderLoading () {
    return <Placeholder />
  }

  renderError () {
    return null
  }

  render () {
    let content
    if (this.state.pageError) {
      content = this.renderError()
    } else if (this.state.fetchingProduct) {
      content = this.renderLoading()
    } else {
      content = this.renderView()
    }

    return (
      <Container>
        {this.renderHeader()}
        <Content style={theme.layout}>{content}</Content>
        <Player ref={this.refPlayer} code={this.state.movie.youtube} />
      </Container>
    )
  }
}

export default MovieView
