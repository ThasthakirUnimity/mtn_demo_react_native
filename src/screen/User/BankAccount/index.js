import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import { Container, Content, Icon, Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { __ } from '@src/utility/translation'
import styles from './styles'
import { navigate } from '@src/navigation'


class AddBankAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Container>
        <DarkStatusBar />
        <Header
          leftType='back'
          title={__('Add Bank Account')}
          titleColor='light'
        />
        <Content>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>{__('Use Another Bank')}</Text>
              <View style={styles.headerCol}>
                <Text style={styles.headerPrice}>N156</Text>
                <Icon name='checkcircle' type='AntDesign' style={styles.headerIcon} />
              </View>
            </View>

            <View style={styles.search}>
              <Button style={styles.searchBtn}>
                <Icon name='search' type='Feather' style={styles.searchBtnIcon} />
              </Button>
              <View style={styles.searchCol}>
                <TextInput
                  placeholder={__('Enter your locality')}
                  placeholderTextColor='rgba(0, 0, 0, 0.3)'
                  style={styles.searchInput} />
              </View>
            </View>

            <View style={styles.bank}>
              <View style={styles.bankHeader}>
                <Text style={styles.bankHeaderTitle}>{__('Popular')}</Text>
              </View>
              <View style={styles.bankContent}>
                <View style={styles.bankRow}>
                  <Button style={styles.bankBtn} onPress={() => {
                    navigate('UserAddBankAccount')
                  }}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Diamond_Bank_Logo.jpg' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWt-vHnWnBgKUHFEkuvIr7PaTVv9OyWWlh6g&usqp=CAU' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://financialallianceforwomen.org/wp-content/uploads/2015/07/New-Stanbic-Bank-Logo.jpg' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                </View>
                <View style={styles.bankRow}>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://www.unepfi.org/wordpress/wp-content/uploads/2008/04/2019-07-03_162454.png' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://unionmobile.unionbankng.com/AgentWalletPortal/images/BANK_logo.png' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://www.prestigenewsonline.com/wp-content/uploads/2019/09/Wema-Bank-Logo.png' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                </View>
                <View style={styles.bankRow}>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWt-vHnWnBgKUHFEkuvIr7PaTVv9OyWWlh6g&usqp=CAU' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <View style={styles.bankBtn} />
                  <View style={styles.bankBtn} />
                </View>
              </View>
            </View>

            <View style={styles.bank}>
              <View style={styles.bankHeader}>
                <Text style={styles.bankHeaderTitle}>{__('Popular')}</Text>
              </View>
              <View style={styles.bankContent}>
                <View style={styles.bankRow}>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Diamond_Bank_Logo.jpg' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWt-vHnWnBgKUHFEkuvIr7PaTVv9OyWWlh6g&usqp=CAU' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://financialallianceforwomen.org/wp-content/uploads/2015/07/New-Stanbic-Bank-Logo.jpg' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                </View>
                <View style={styles.bankRow}>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://www.unepfi.org/wordpress/wp-content/uploads/2008/04/2019-07-03_162454.png' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://unionmobile.unionbankng.com/AgentWalletPortal/images/BANK_logo.png' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://www.prestigenewsonline.com/wp-content/uploads/2019/09/Wema-Bank-Logo.png' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                </View>
                <View style={styles.bankRow}>
                  <Button style={styles.bankBtn}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWt-vHnWnBgKUHFEkuvIr7PaTVv9OyWWlh6g&usqp=CAU' }} resizeMode='contain' style={styles.bankBtnImg} />
                  </Button>
                  <View style={styles.bankBtn} />
                  <View style={styles.bankBtn} />
                </View>
              </View>
            </View>

          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default connect(({ session }) => ({ session }))(AddBankAccount)
