import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { WebView } from 'react-native-webview'

import { bind } from '@src/utility/component'
import { Container, Content } from '@src/component/Basic'
import { DarkStatusBar } from '@src/component/StatusBar'
import Header from '@src/component/Header'
import { __ } from '@src/utility/translation'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      url: props.route.params.url,
      newsData: props.route.params.newsData || {}
    }

    bind(this)

    this.renderWebview = this.renderWebview.bind(this)
  }

  renderLoading () {
    return (
      <ActivityIndicator
        color='#009688'
        size='large'
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      />
    )
  }

  renderError () {
    return <View />
  }

  renderWebview () {
    return (
      <WebView
        source={{ uri: this.state.url }}
        originWhitelist={['*']}
        mixedContentMode='always'
        allowsFullscreenVideo={false}
        autoManageStatusBarEnabled
        sharedCookiesEnabled
        thirdPartyCookiesEnabled
        scrollEnabled
        domStorageEnabled
        startInLoadingState
        allowUniversalAccessFromFileURLs
        javaScriptEnabled
        nestedScrollEnabled
        renderLoading={this.renderLoading}
        renderError={this.renderError}
      />
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          leftType='back'
          title={this.state?.newsData?.name || __('News')}
          titleColor='light'
        />

        <Content>
          {this.renderWebview()}
        </Content>
      </Container>
    )
  }
}
