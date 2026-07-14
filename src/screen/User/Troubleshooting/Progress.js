import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Circle } from 'react-native-progress'

import styles from './styles'

class Progress extends Component {
  constructor (props) {
    super(props)

    this.state = {
      status: 1
    }

    this.updateStatus = this.updateStatus.bind(this)
    this.renderStatus = this.renderStatus.bind(this)
  }

  componentDidMount () {
    this.timer = setInterval(this.updateStatus, 1500)
  }

  componentWillUnmount () {
    this.timer && clearInterval(this.timer)
  }

  updateStatus () {
    if (this.state.status === 4) {
      this.props.onCompleted(true)
    } else {
      this.setState({
        status: this.state.status + 1
      })
    }
  }

  renderStatus = () => {
    if (this.state.status === 1) {
      return <Text style={styles.progressText}>Connecting...</Text>
    } else if (this.state.status === 2) {
      return (
        <>
          <Text style={styles.progressTitle}>Scanning Your System</Text>
          <Text style={styles.progressText}>Searching for service problems</Text>
          <Text style={styles.progressText}>Please do not leave or refresh this page</Text>
        </>
      )
    } else if (this.state.status === 3) {
      return <Text style={styles.progressTitle}>Sending Signals</Text>
    } else if (this.state.status === 4) {
      return <Text style={styles.progressTitle}>Your device is working well</Text>
    }
    return null
  }

  render () {
    return (
      <View style={styles.progress}>
        <Circle size={280} indeterminate />
        {this.renderStatus()}
      </View>
    )
  }
}

export default Progress
