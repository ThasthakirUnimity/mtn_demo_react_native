import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'

import Header from '@src/component/Header'
import { TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'

import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'

class Daily extends React.Component {
  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title={'Daily Challenge'}
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.add}>
              <View style={styles.formContent}>
                <Text style={styles.formInputHeader}>Write Something here</Text>
                <TextInput
                  placeholder='Type here'
                  placeholderTextColor='rgba(0, 0, 0, 0.2 )'
                  style={styles.formInput} />
              </View>
              <View style={styles.dailyImgs}>
                <Icon name='share' type='Feather' style={styles.shareIcon}/>
                <Text style={styles.uploadText}>Upload your image/Video here</Text>
                <Text style={styles.browseText}>Browse</Text>
              </View>
            </View>
            <View style={styles.fileContentImg}>
              <Text style={styles.uploadText}>Upload 4 files</Text>
              <ScrollView horizontal>
                <Image source={{ uri: 'https://www.pro-lapse.com/wp-content/uploads/2018/11/camera-lenses.jpg' }} style={styles.upldImg} />
                <Image source={{ uri: 'https://th.bing.com/th/id/OIP.G0cNhmRF7CCqdaomBbQWKAHaEU?pid=ImgDet&rs=1' }} style={styles.upldImg} />
                <Image source={{ uri: 'https://www.pro-lapse.com/wp-content/uploads/2018/11/camera-lenses.jpg' }} style={styles.upldImg} />
                <Image source={{ uri: 'https://th.bing.com/th/id/OIP.G0cNhmRF7CCqdaomBbQWKAHaEU?pid=ImgDet&rs=1' }} style={styles.upldImg} />
              </ScrollView>
              <View style={styles.voteDetail}>
                <View style={styles.soldInfo}>
                  <View style={styles.soldLine} />
                  <View style={[styles.soldLineActive, { width: '60%' }]} />
                </View>
              </View>
              <View style={styles.timeSchedule}>
                <Text style={styles.uploadText}>Time remaining: 23 sec</Text>
                <View style={styles.iconDetail}>
                  <Icon name='pause-outline' type='Ionicons' style={styles.pauseIcon}/>
                  <Icon name='close-outline' type='Ionicons' style={styles.closeIcon} />
                </View>
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(Daily)


