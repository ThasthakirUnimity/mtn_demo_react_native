import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { MarkdownView } from 'react-native-markdown-view'

import { Container } from '@src/component/Basic'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { agreeTerms } from '@src/store/reducers/session'
import { httpCms } from '@src/utility/http'
import { __ } from '@src/utility/translation'

import styles from './styles'
import { pageIds } from '@src/config/page'
import { applyComponentFeatures } from '@src/utility/core'

class PageView extends Component {
  constructor (props) {
    super(props)

    const pageTypeID = props.route.params.id || ''
    let pageType = {}
    if (pageTypeID && pageIds[pageTypeID]) {
      pageType = pageIds[pageTypeID]
    }

    this.state = {
      pageTypeID,
      pageType,
      page: {
        title: pageType.title
      }
    }

    applyComponentFeatures(this)

    this.fetchPage = this.fetchPage.bind(this)
  }

  componentDidMount () {
    this.fetchPage()
  }

  async fetchPage () {
    try {
      const r = (await httpCms.get(this.state.pageType.url)).data
      if (r?.id || r?.title) {
        await this.promisedSetState({ page: r })
      } else {
        throw new Error('Not Found')
      }
    } catch (e) {
      await this.promisedSetState({
        pageError: true
      })
    }
    await this.promisedSetState({
      fetchingProfile: false
    })
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          leftType='back'
          title={this.state.page.title}
          titleColor='light'
        />

        <View style={styles.page}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.termContent}
          >
            {
              this.state.page.description
                ? (
                  <MarkdownView
                    styles={styles.markdown}
                  >
                    {this.state.page.description}
                  </MarkdownView>
                  )
                : null
            }
          </ScrollView>
        </View>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }), { agreeTerms })(PageView)
