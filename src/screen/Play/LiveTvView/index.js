import React from 'react'
import { Image, ScrollView, StatusBar, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content, Text, Icon } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import { httpCms, httpMovie } from '@src/utility/http'
import styles from './styles'
import Placeholder from './Placeholder'
import { URLS } from '@src/config/url'
import { compile } from 'path-to-regexp'
import { goBack } from '@src/navigation'
import { MOVIE_ASSET_PATH } from '@src/config/env'
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient'

class LiveTvView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      languageSelect: 'english',
      fetchingMovie: true,
      liveTv: props.route.params.item,
      pageError: false
    }

    bind(this)

    this.renderView = this.renderView.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.renderError = this.renderError.bind(this)
  }

  renderView() {
    return (
      <ScrollView style={styles.formContainer}>
        <ScrollView horizontal style={styles.language}
          showsHorizontalScrollIndicator={false}>
          {this.state.liveTv ?.spoken_languages ?.map(language => (<TouchableOpacity style={this.state.languageSelect === 'english' ? styles.fBtnActive : styles.fBtn} onPress={() => this.setState({ languageSelect: 'english' })}>
            <Text style={this.state.languageSelect === 'english' ? styles.fBtnTextActive : styles.fBtnText}>{language.name}</Text>
          </TouchableOpacity>))}
        </ScrollView>
        <View style={styles.watchContent}>
          <View style={styles.movieImg}>
            <Image source={{ uri: MOVIE_ASSET_PATH + this.state.liveTv.backdrop_path }} style={styles.watchMovieImg} />
          </View>
          <View style={styles.watchContent1}>
            <View style={theme.row}>
              <Text style={styles.movieTitle} numberOfLines={1}>{this.state.liveTv.title}</Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.movieData}>IMDb  {this.state.liveTv.vote_average}</Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.movieData}>{this.state.liveTv.release_year}</Text>
            </View>
            <View style={theme.row}>
              <Text style={styles.movieData}>Fantasy U/A</Text>
            </View>
          </View>
        </View>
        <Text style={styles.movieText} numberOfLines={4}>{this.state.liveTv.overview}</Text>
        <View style={styles.btnRow}>
          <Button style={styles.btn}>
            <Icon style={styles.btnIcon} name='download' type='AntDesign' />
            <Text style={styles.btnText}>Download</Text>
          </Button>
          <Button style={styles.btn}>
            <Icon style={styles.btnIcon} name='minus' type='AntDesign' />
            <Text style={styles.btnText}>WatchList</Text>
          </Button>
          <Button style={styles.btn}>
            <Icon style={styles.btnIcon} name='share' type='MaterialCommunityIcons' />
            <Text style={styles.btnText}>Share</Text>
          </Button>
        </View>
        <View style={styles.trailer}>
          <Text style={styles.trailerText}>Trailers & Extras</Text>
          <Image source={{ uri: MOVIE_ASSET_PATH + this.state.liveTv.backdrop_path }} style={styles.watchMovieImg} />
        </View>
      </ScrollView>
    )
  }

  renderHeader() {
    return (
      <>
        <StatusBar backgroundColor='(rgba(0,0,0,1 )' />
        <View style={styles.watchContainer}>
          <Image source={{ uri: MOVIE_ASSET_PATH + this.state.liveTv.poster_path }} style={styles.watchImg} />
          <LinearGradient colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']} style={styles.watchOverlay}>
            <View style={styles.watchHeader}>
              <Button style={styles.watchHeaderBtn} onPress={goBack}>
                <Icon style={styles.backIcon} name='chevron-left' type='Entypo' />
              </Button>
              <Button style={styles.watchHeaderBtn}>
                <Icon style={styles.backIcon} name='scan-outline' type='Ionicons' />
              </Button>
            </View>
            <View style={styles.watchBot}>
              <Button style={styles.watchBotBtn}>
                <Icon name='play' type='Ionicons' style={styles.watchBotBtnIcon} />
              </Button>
              <View style={styles.watchBotCol}>
                <Text style={styles.playWatch}>{__('Watch')}</Text>
                <Text style={styles.playDuration}>2hr 38m</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </>
    )
  }

  renderLoading() {
    return <Placeholder />
  }

  renderError() {
    return null
  }

  render() {
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
        <Content style={theme.layout}>
          {content}
        </Content>
      </Container>
    )
  }
}

export default LiveTvView
