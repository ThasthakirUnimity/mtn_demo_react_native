import React from 'react'
import { View } from 'react-native'
import { Container, Text } from '@src/component/Basic'
import { Button, RadioButton } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { bind } from '@src/utility/component'
import { COLOR, FAMILY, SIZE } from '@src/theme/typography'
export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            answer: '',
        }
        bind(this)
        this.selectedAnswer = this.selectedAnswer.bind(this)
    }

    async componentDidMount() {
        await this.promisedSetState({
            answer: this.props.data.options[0]
        })
    }

    async selectedAnswer(answer) {
        await this.promisedSetState({
            answer
        })
    }

    renderItem(item) {
        return (
            <Button style={{ ...styles.answerContainer, backgroundColor: this.state.answer === item ? COLOR.PRIMARY : COLOR.LIGHT }} onPress={() => { this.selectedAnswer(item) }}>
                <View style={styles.accountCol}>
                    <View>
                        <RadioButton checked={this.state.answer === item} />
                    </View>
                    <View style={styles.accountCol2}>
                        <View style={styles.accountRow}>
                            <Text style={styles.session}>{item}</Text>
                        </View>
                    </View>

                </View>
            </Button>
        )
    }

    render() {
        return (
            <Container style={styles.challengeContainer} >
                <View style={styles.answerContainer} >
                    <View style={styles.challengeContent2}>
                        <Text style={styles.session}>Question : {this.props.data.name} ?</Text>
                    </View>
                </View>
                {this.props.data.options.map((option) => {
                    return this.renderItem(option)
                })
                }
                <Button onPress={() => { this.props.callback(this.state.answer) }} style={styles.startBtn}>
                    <Text style={styles.startBtnText}>Next</Text>
                </Button>
            </Container>
        )
    }
}