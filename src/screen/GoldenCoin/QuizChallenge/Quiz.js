import React from 'react'
import { View } from 'react-native'
import { Container, Text } from '@src/component/Basic'
import { Button, RadioButton } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './styles'
import { bind } from '@src/utility/component'
import { COLOR } from '@src/theme/typography'
export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: ''
    }
    bind(this)
    this.selectedAnswer = this.selectedAnswer.bind(this)
  }

  async componentDidMount () {
    await this.promisedSetState({
      answer: this.props.data.options[0]
    })
  }

  async selectedAnswer (answer) {
    await this.promisedSetState({
      answer
    })
  }

  renderItem (item) {
    return (
      <Button
        style={[styles.answerContainer, { backgroundColor: this.state.answer === item ? COLOR.PRIMARY : COLOR.SMOKE_DARK }]}
        onPress={() => { this.selectedAnswer(item) }}
      >
        <RadioButton checked={this.state.answer === item} />
        <View style={styles.accountCol}>
          <Text style={styles.answerText}>{item}</Text>
        </View>
      </Button>
    )
  }

  render () {
    return (
      <Container>
        <View style={styles.ques}>
          <Text style={styles.quesTitle}>Question : {this.props.data.name} ?</Text>
        </View>
        {this.props.data.options.map((option) => {
          return this.renderItem(option)
        })}
        <Button onPress={() => { this.props.callback(this.state.answer) }} style={styles.startBtn}>
          <Text style={styles.startBtnText}>Next</Text>
        </Button>
      </Container>
    )
  }
}
