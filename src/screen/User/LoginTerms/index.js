import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { MarkdownView } from 'react-native-markdown-view'

import { Container, Content, Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { URLS } from '@src/config/url'
import { agreeTerms } from '@src/store/reducers/session'
import { httpCms } from '@src/utility/http'
import { __ } from '@src/utility/translation'

import styles from './styles'
import { navigateReset } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

class LoginTerms extends Component {
  constructor (props) {
    super(props)

    this.state = {
      accepted: false,
      pageContent: {}
    }

    this.accept = this.accept.bind(this)
    this.fetchContent = this.fetchContent.bind(this)
    this.renderButton = this.renderButton.bind(this)
  }

  componentDidMount () {
    this.fetchContent()
  }

  accept () {
    logClickEvent('AcceptPolicy')
    this.props.agreeTerms(true)
    this.setState({ accepted: true })
    setTimeout(() => {
      if (this.props.session.profileStatus != 1) {
        //navigateReset('UserLoginProfile')
        navigateReset('UserHome') 
        
      } else {
        navigateReset('UserLoginPinCreate')
      }
    }, 1500)
  }

  async fetchContent () {
    try {
      const r = (await httpCms.get(URLS.PAGE_TERMS_GENERAL)).data
      if (r?.id) {
        this.setState({ pageContent: r })
      }
    } catch (e) {
      console.log(e)
    }
  }

  renderButton () {
    if (this.state.accepted) {
      return (
        <Button style={styles.pageAcceptedBtn}>
          <Icon name='check-circle-fill' type='Octicons' style={styles.pageAcceptedBtnIcon} />
          <Text style={styles.pageAcceptedBtnText}>{__('Policy Accepted')}</Text>
        </Button>
      )
    }

    return (
      <Button style={styles.pageBtn} onPress={this.accept}>
        <Text style={styles.pageBtnText}>{__('Accept Policy')}</Text>
      </Button>
    )
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          leftHide
          title={__('Terms & Conditions')}
          titleColor='light'
          titleStyle={{ marginLeft: 20 }}
        />

        <View style={styles.page}>
          <View style={styles.pageTop}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.termContent}
            >
              {
                this.state.pageContent.description
                  ? (
                    <MarkdownView
                      styles={styles.markdown}
                    >
                      {this.state.pageContent.description}
                    </MarkdownView>
                    )
                  : null
              }
            </ScrollView>
          </View>
          <View style={styles.pageBot}>
            {this.renderButton()}
          </View>
        </View>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }), { agreeTerms })(LoginTerms)
