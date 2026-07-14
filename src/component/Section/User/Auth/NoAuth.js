import { Button, Container } from '@src/component/Basic'
import {Content} from '@src/component/Basic'
import { Button } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { goBack, navigateCurrent } from '@src/navigation'
import React from 'react'
import { Text, View } from 'react-native'
import { FAMILY, SIZE, COLOR } from '@src/theme/typography'

const NoAuth = () => {
  const login = () => navigateCurrent('UserAuth')
  return (
    <Container>
      <DarkStatusBar />
      <Header
        primary
        leftType='back'
        title='Authentication required'
        titleColor='light'
      />
      <Content style={styles.content}>
        <View style={styles.welcome}>
          <Text style={styles.header}>Welcome to RCB!</Text>
          <Text style={styles.text}>You are viewing the app as a <Text style={{ color: COLOR.RED }}>Guest</Text>, some features are not available to the guests. Register and enjoy the best features and exclusive content.</Text>
          <View style={styles.btn}>
            <Button style={styles.cancelBtn} onPress={goBack}>
              <Text style={styles.CancelBtnText}>I'll do it Later</Text>
            </Button>
            <Button
              style={styles.byeBtn}
              onPress={login}
            >
              <Text style={styles.byeBtnText}>Register Now</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  )
}

const styles = {
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  header: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_20,
    color: COLOR.DARK,
    textAlign: 'center',
    marginBottom: 30
  },
  close: {
    justifyContent: 'space-between'
  },
  closeBtn: {
    alignSelf: 'flex-end'
  },
  closeBtnIcon: {
    fontSize: SIZE.SIZE_18,
    color: COLOR.GREYDark
  },

  text: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.GREY,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  cancelBtn: {
    borderColor: COLOR.smoke,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10
  },
  cancelBtnText: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT
  },
  byeBtn: {
    backgroundColor: COLOR.PRIMARY,
    borderColor: COLOR.PRIMARY,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  byeBtnText: {
    fontFamily: FAMILY.GEO_MEDIUM,
    fontSize: SIZE.SIZE_14,
    color: COLOR.BUTTON_TEXT
  }
}

export default NoAuth
