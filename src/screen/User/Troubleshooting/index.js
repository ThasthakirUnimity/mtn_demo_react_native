import React from 'react'
import { ScrollView, View } from 'react-native'

import { Container, Content } from '@src/component/Basic'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'

import styles from './styles'
import Progress from './Progress'
import Success from './Success'

class Troubleshooting extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      step: 'progress'
    }

    this.onCompleted = this.onCompleted.bind(this)
    this.renderStep = this.renderStep.bind(this)
  }

  onCompleted () {
    this.setState({ step: 'success' })
  }

  renderStep () {
    if (this.state.step === 'progress') {
      return <Progress onCompleted={this.onCompleted} />
    } else if (this.state.step === 'success') {
      return <Success />
    }
    return null
  }

  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header default leftType='back' title={__('Troubleshooting')} titleColor='light' />
        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.renderStep()}
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default Troubleshooting
