import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import { Container, Content, Icon } from '@src/component/Basic'
import Header from '@src/component/Header'
import { Button } from '@src/component/Form'
import { DarkStatusBar } from '@src/component/StatusBar'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import { __ } from '@src/utility/translation'

import styles from './styles'
import { logClickEvent } from '@src/utility/analytics'

class Configuration extends React.Component {
  render () {
    return (
      <Container>
        <DarkStatusBar />
        <Header default leftType='back' title={__('Setup')} titleColor='light' />
        <Content style={theme.layout}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.setupHeader}>
              <Text style={styles.setupHeaderTitle}>{__('Get more from your router')}</Text>
            </View>
            <View style={styles.setupCol}>
              <Button
                style={styles.setupBtn}
                onPress={() => {
                  logClickEvent('MenuWifiSetup')
                  navigate('PublicPageView', { id: 'wifiSetup' })
                }}
              >
                <View style={styles.setupBg}>
                  <Icon name='gears' type='FontAwesome' style={styles.setupBtnIcon} />
                </View>
                <Text style={styles.setupBtnText}>
                  {__('Wifi Setup')}
                </Text>
              </Button>
              <Button
                style={styles.setupBtn}
                onPress={() => {
                  navigate('UserTroubleshooting')
                }}
              >
                <View style={styles.setupBg}>
                  <Icon name='wifi-logo' type='Fontisto' style={styles.setupBtnIcon} />
                </View>
                <Text style={styles.setupBtnText}>
                  {__('Diagnose your Home Wi-Fi')}
                </Text>
              </Button>
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default Configuration
