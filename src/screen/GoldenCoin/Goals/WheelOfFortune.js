import React from 'react'
import { ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { DarkStatusBar } from '@src/component/StatusBar'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
//import WheelOfFortune from 'react-native-wheel-of-fortune'
import styles from '../styles'
import theme from '@src/theme/styles'
import { URLS } from "@src/config/url";
import { httpGame } from '@src/utility/http';
import { bind } from '@src/utility/component'



export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                {/* <WheelOfFortune options={{
                    winner: this.props.winner,
                    rewards: this.props.data,
                    knobSize: 50,
                    borderWidth: 5,
                    innerRadius: 50,
                    duration: 4000,
                    backgroundColor: 'transparent',
                    textAngle: 'horizontal',
                    knobSource: require('@asset/images/knob.png'),
                    onRef: ref => (this.child = ref),
                }}
                    getWinner={this.props.callback}
                /> */}
                <Button onPress={() => { this.child._onPress() }} style={styles.startBtn}>
                    <Text text='medium' size='text16' color='dark'>Play</Text>
                </Button>
            </Container>
        )
    }
}
