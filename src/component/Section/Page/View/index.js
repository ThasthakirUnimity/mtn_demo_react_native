import React from 'react'
import { ActivityIndicator, ScrollView, Text, Linking, View } from 'react-native'
import Modal from 'react-native-modalbox'
import { MarkdownView } from 'react-native-markdown-view'

import styles from './styles'
import Support from '@src/component/Support'
import {  Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { bind } from '@src/utility/component'
import { URLS } from '@src/config/url'
import http from '@src/utility/http'
import { pageIds } from '@src/config/page'

class PageView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      loading: true,
      pageId: '',
      pageType: '',
      page: {}
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.fetchPage = this.fetchPage.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  onOpened () {
    this.setState({
      isOpened: true
    })
  }

  onClosed () {
    this.setState({
      isOpened: false
    })
  }

  async open (pageId) {
    await this.promisedSetState({
      loading: true,
      pageId,
      pageType: pageIds[pageId] || '-',
      page: {}
    })
    await this.fetchPage()
    await this.refModal.open()
  }

  async close () {
    await this.refModal.close()
  }

  async fetchPage () {
    await Support.showLoading()
    try {
      const params = {
        languageCode: 'en',
        resourceTypeID: '11',
        generalType: this.state.pageType
      }
      const r = (await http.get(URLS.POST, { params })).data
      if (r.records) {
        const { description, ...page } = r.records[0]
        await this.promisedSetState({
          loading: false,
          page
        })
        setTimeout(() => {
          this.setState({ page: { ...page, description } })
        }, 500)
      }
    } catch (e) {
      this.close()
    }
    await Support.hideLoading()
  }

  onLinkPress (url) {
    Linking.canOpenURL(url) && Linking.openURL(url)
  }

  renderNodeHeading () {
    const element = ({ level, content, state }, output) => {
      if (level == 1) {
        return (
          <View style={styles.header}>
            <View style={styles.headerLine} />
            <Text style={styles.headerTitle}>{typeof content === 'string' ? content : output(content, state)}</Text>
          </View>
        )
      } else if (level == 2) {
        return (
          <View style={styles.header}>
            <Text style={styles.headerSubTitle}>{typeof content === 'string' ? content : output(content, state)}</Text>
          </View>
        )
      }

      return null
    }
    const render = (node, output, state, styles) => element(node, output)

    return { render }
  }

  renderNodeParagraph () {
    const renderText = ({ content, state }, output) => {
      return (
        <View style={styles.content}>
          <View>
            <Text style={styles.desc}>{typeof content === 'string' ? content : output(content, state)}</Text>
          </View>
        </View>
      )
    }

    const render = (node, output) => {
      if (node.content instanceof Array && node.content.length === 1 && node.content[0].type === 'image') {
        return null
      } else {
        return renderText(node, output)
      }
    }

    return { render }
  }

  renderNodeLink () {
    const element = ({ target, content, state }, output) => {
      const onPress = () => this.onLinkPress(target)
      return (
        <Text style={styles.linkTitle} onPress={onPress}>{typeof content === 'string' ? content : output(content, state)}</Text>
      )
    }
    const render = (node, output, state, styles) => element(node, output)

    return { render }
  }

  renderContent () {
    let content
    if (this.state.loading) {
      content = <View style={{ flext: 1 }}><ActivityIndicator size='small' style={{ zIndex: 100 }} /></View>
    } else {
      if (this.state.page.description) {
        content = (
          <MarkdownView styles={styles.markdown}>
            {this.state.page.description || ''}
          </MarkdownView>
        )
      } else {
        content = <View style={{ flext: 1 }}><ActivityIndicator size='small' style={{ zIndex: 100 }} /></View>
      }
    }
    return (
      <>
        <View style={styles.modalClose}>
          <Button style={styles.modalCloseBtn} onPress={this.close}>
            <Icon name='close' type='AntDesign' style={styles.modalCloseBtnIcon} />
          </Button>
        </View>
        <Text style={styles.modalHeader}>{this.state.page.title}</Text>
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          {content}
        </ScrollView>
      </>
    )
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='center'
        backButtonClose
        backdropPressToClose
        swipeToClose={false}
        style={styles.modal}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}

export default PageView
