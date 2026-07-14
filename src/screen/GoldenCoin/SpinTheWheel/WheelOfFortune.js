import React from 'react'

import { Container, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'

// import WheelOfFortune from 'react-native-wheel-of-fortune'
import styles from './styles'
import { __ } from '@src/utility/translation'

export default class extends React.Component {
  render () {
    return (
      <Container>
        {/* <WheelOfFortune
          options={{
            winner: this.props.winner,
            rewards: this.props.data,
            knobSize: 50,
            borderWidth: 5,
            innerRadius: 50,
            duration: 4000,
            backgroundColor: 'transparent',
            textAngle: 'horizontal',
            knobSource: require('@asset/images/knob.png'),
            onRef: ref => (this.child = ref)
          }}
          getWinner={this.props.callback}
        /> */}
        <Button onPress={() => { this.child._onPress() }} style={styles.startBtn}>
          <Text style={styles.startBtnText}>{__('Play')}</Text>
        </Button>
      </Container>
    )
  }
}
