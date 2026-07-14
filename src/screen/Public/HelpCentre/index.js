import React, { createRef } from 'react'
import { Image, ScrollView, View, Linking, Dimensions } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'
import { connect } from 'react-redux'
import Modal from 'react-native-modalbox'
// import YouTube from 'react-native-youtube'

import Header from '@src/component/Header'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import { bind } from '@src/utility/component'
import { navigate } from '@src/navigation'
import theme from '@src/theme/styles'
import styles from './styles'
import { DarkStatusBar } from '@src/component/StatusBar'
import http, { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'

import WalkThrough from './WalkThrough'
import WalkThroughPlayer from './WalkThrough/Player'
import Faq from './Faq'
import Accordion from './Accordion'
import Link from './Link'
import SectionProvider from '@src/component/Section/Provider'
import AccordionContent from './AccordionContent'
import { pageIds } from '@src/config/page'
import { openEmail, openPhone } from '@src/utility/linking'
import ServiceRequests from './ServiceRequests'
import { openChatBot } from '@src/utility/supportChat'
import { useNumberBaseKey } from '@src/hooks/user'
import { logClickEvent } from '@src/utility/analytics'
import { CURRENCY, APP_DETAILS } from '@src/theme/typography'

const screenWidth = Dimensions.get('window').width

const RadioButton = ({ variant = 'default', ...props }) => {
  const { style, checked, onChange, prefix, color, ...p } = props

  p.onPress = () => {
    onChange && onChange(!checked)
  }

  const iconStyle = { color: color || 'black' }
  if (prefix) {
    iconStyle.paddingHorizontal = 5
  }

  return (
    <Button style={props.style ? [styles.container, props.style] : styles.container} {...p}>
      {prefix}
      <Icon size='text28' color='greyLight' name={checked ? 'radio-btn-active' : 'radio-btn-passive'} type='Fontisto' style={styles.iconStyle} />
    </Button>
  )
}

class HelpCentreUI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      serviceRequestTotal: 0,
      serviceRequests: [],
      fetchingServiceRequests: true,

      pages: {},
      faqs: [],

      walkthrough: [],
      fetchingWalkthrough: false,
      walkthroughSelected: null,

      profile: 'P',
      contact: {}
    }
    bind(this)

    this.fetchServiceRequests = this.fetchServiceRequests.bind(this)
    this.fetchContent = this.fetchContent.bind(this)
    this.fetchFaq = this.fetchFaq.bind(this)
    this.fetchContact = this.fetchContact.bind(this)
    this.fetchWalkthrough = this.fetchWalkthrough.bind(this)
    this.mailus = this.mailus.bind(this)
    this.onClickWalkthrough = this.onClickWalkthrough.bind(this)

    this.refWalkThroughPlayer = createRef()
  }

  async componentDidMount () {
    await this.fetchServiceRequests()
    await this.fetchContact()
    await this.fetchWalkthrough()
  }

  async fetchServiceRequests () {
    try {
      const r = (await http.get(URLS.SERVICE_REQUEST)).data
      if (Array.isArray(r.response)) {
        await this.promisedSetState({
          serviceRequestTotal: r.active_records,
          serviceRequests: r.response
        })
      }
    } catch (e) { console.log(e) }
    await this.promisedSetState({
      fetchingServiceRequests: false
    })
  }

  async fetchContent (name) {
    try {
      const r = (await httpCms.get(pageIds[name].url)).data
      this.promisedSetState({ pages: { ...this.state.pages, [name]: r || {} } })
    } catch (e) {
    }
  }

  async fetchFaq () {
    try {
      const r = (await httpCms.get(URLS.CONTENT_FAQ)).data
      const faqs = {}
      r.rows.forEach(item => {
        if (!faqs[item.category]) {
          faqs[item.category] = {
            category: item.category,
            list: []
          }
        }
        faqs[item.category].list.push({
          id: item.id,
          question: item.question,
          answer: item.answer
        })
      })
      this.promisedSetState({ faqs: Object.values(faqs) })
    } catch (e) {
    }
  }

  async fetchContact () {
    try {
      const r = (await httpCms.get(URLS.CONTENT_CONTACT_US)).data
      if (r.id) {
        await this.promisedSetState({
          contact: r
        })
      }
    } catch (e) {
    }
  }

  async fetchWalkthrough () {
    try {
      const r = (await httpCms.get(URLS.WALKTHROUGH)).data
      if (Array.isArray(r.rows)) {
        await this.promisedSetState({
          walkthrough: r.rows
        })
      }
    } catch (e) { console.log(e) }
    await this.promisedSetState({
      fetchingWalkthrough: false
    })
  }

  mailus () {
    openEmail(this.state.contact.mail_us)
  }

  async onClickWalkthrough (item) {
    await this.promisedSetState({
      walkthroughSelected: item
    })
    this.refWalkThroughPlayer.current.open()
  }

  render () {
    let userName = 'Guest'
    let phone = ''
    let img = require('@asset/icons/avatar-dark.png')
    if (this.props.session.numbers[this.props.session.numberIndex]) {
      const selectedNumber = this.props.session.numbers[this.props.session.numberIndex]
      userName = selectedNumber.name
      phone = selectedNumber.number
      if (selectedNumber.profile_image) {
        img = { uri: selectedNumber.profile_image }
      }
    }

    return (
      <Container>
        <DarkStatusBar />
        <Header
          default
          leftType='back'
          title='Help Centre'
          titleColor='light'
        />
        <Content style={theme.layout}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.profileContainer}>
              <View style={styles.profileContent}>
                <View>
                  <Image source={img} style={styles.profileImg} />
                </View>
                <View style={styles.profileDetail}>
                  <View style={styles.profileCol}>
                    <Text numberOfLines={1} style={screenWidth > 400 ? styles.profileNameSm : styles.profileName}>{userName}</Text>
                    <Text style={screenWidth > 400 ? styles.profileNoSm : styles.profileNo}>{phone}</Text>
                  </View>
                  <Button
                    style={styles.pickerSelection}
                    onPress={() => {
                      logClickEvent('HelpCentreSwitchNumber')
                      SectionProvider.showUserNumberSelection()
                    }}
                  >
                    <Icon name='caret-down-circle-outline' type='Ionicons' style={styles.pickerSelectionIcon} />
                  </Button>
                  <View style={styles.line} />
                  <View style={styles.profileCol}>
                    <Text style={screenWidth > 400 ? styles.profileNameSm : styles.profileName}>{__('Service Request')}</Text>
                    <Text style={screenWidth > 400 ? styles.profileNoSm : styles.profileNo}>{this.state.serviceRequestTotal} {__('Active Request')}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.contactContainer}>
              <View style={styles.contactRow}>
                <Text style={styles.contactHeader}>{__('My Bad that I bought you here')}</Text>
              </View>
              <View style={styles.contactRow}>
                <Text style={styles.contactDesc}>{__('However, let me see how I can fix this for you')}</Text>
              </View>
              <View>
                <Button
                  style={styles.contactBtn}
                  onPress={() => {
                    logClickEvent('HelpCentreTopChat')
                    openChatBot()
                  }}
                >
                  <View style={styles.contactCol}>
                    <Image source={require('@asset/icons/help/chatbot.png')} resizeMode='contain' style={styles.contactBtnImg} />
                  </View>
                  <Text style={styles.contactBtnText}>{__('Chat with Us')}</Text>
                </Button>
                <Button
                  style={styles.contactBtn}
                  onPress={() => {
                    logClickEvent('HelpCentreTopCallUs')
                    this.refs.modalCall.open()
                  }}
                >
                  <View style={styles.contactCol}>
                    <Image source={require('@asset/icons/help/call.png')} resizeMode='contain' style={styles.contactBtnImg} />
                  </View>
                  <Text style={styles.contactBtnText}>{__('Call Us')}</Text>
                </Button>
                <Button
                  style={styles.contactBtn}
                  onPress={() => {
                    logClickEvent('HelpCentreTopMailUs')
                    this.mailus()
                  }}
                >
                  <View style={styles.contactCol}>
                    <Image source={require('@asset/icons/help/mail.png')} resizeMode='contain' style={styles.contactBtnImg} />
                  </View>
                  <Text style={styles.contactBtnText}>{__('Mail Us')}</Text>
                </Button>
              </View>
            </View>

            <ServiceRequests
              list={this.state.serviceRequests}
              fetching={this.state.fetchingServiceRequests}
            />

            <View style={styles.header}>
              <Text style={styles.headerTitle}>{__('Mostly Used')}</Text>
            </View>

            <ScrollView horizontal style={styles.featureContainer}>
              <View style={styles.featureContent}>
                <Button
                  style={styles.featureImgDisplay}
                  onPress={() => {
                    logClickEvent('HelpCentreQuickStoreLocator')
                    navigate('PublicStore')
                  }}
                >
                  <Image source={require('@asset/icons/help/locate-mtn-store.png')} style={styles.featureImg} resizeMode='contain' />
                </Button>
                <Text style={styles.featureText}>{__('Locate'+ " "+ APP_DETAILS.APP_NAME +' Store')}</Text>
              </View>
              <View style={styles.featureContent}>
                <Button
                  style={styles.featureImgDisplay}
                  onPress={() => {
                    logClickEvent('HelpCentreQuickSubmitNIN')
                    navigate('UserSubmitNIN')
                  }}
                >
                  <Image source={require('@asset/icons/help/submit-nin.png')} style={styles.featureImg} resizeMode='contain' />
                </Button>
                <Text style={styles.featureText}>{__('Submit NIN')}</Text>
              </View>
              <View style={styles.featureContent}>
                <Button
                  style={styles.featureImgDisplay}
                  onPress={() => {
                    logClickEvent('HelpCentreQuickLegal')
                    navigate('PublicPageView', { id: 'legal' })
                  }}
                >
                  <Image source={require('@asset/icons/help/legal.png')} style={styles.featureImg} resizeMode='contain' />
                </Button>
                <Text style={styles.featureText}>{__('Legal')}</Text>
              </View>
              <View style={styles.featureContent}>
                <Button
                  style={styles.featureImgDisplay}
                  onPress={() => {
                    logClickEvent('HelpCentreQuickSecurity')
                    navigate('PublicPageView', { id: 'security' })
                  }}
                >
                  <Image source={require('@asset/icons/help/security.png')} style={styles.featureImg} resizeMode='contain' />
                </Button>
                <Text style={styles.featureText}>{__('Security')}</Text>
              </View>
            </ScrollView>

            <WalkThrough
              list={this.state.walkthrough}
              fetching={this.state.fetchingWalkthrough}
              onClick={this.onClickWalkthrough}
            />

            <View style={styles.header}>
              <Text style={styles.headerTitle}>{__('I think I have all your answers already')}</Text>
            </View>
            <View>
              <Accordion
                icon={{
                  off: require('@asset/icons/help/btn-faqs.png'),
                  on: require('@asset/icons/help/btn-faqs-on.png')
                }}
                title={__('FAQs')}
                renderContent={() => <Faq list={this.state.faqs} />}
                onOpened={() => {
                  logClickEvent('HelpCentreFAQ')
                  if (this.state.faqs.length == 0) {
                    this.fetchFaq()
                  }
                }}
              />

              <AccordionContent
                icon={{
                  off: require('@asset/icons/help/btn-covid.png'),
                  on: require('@asset/icons/help/btn-covid-on.png')
                }}
                title={__('COVID 19')}
                id='covid19'
                content={this.state.pages.covid19}
                fetchContent={this.fetchContent}
                onOpened={() => {
                  logClickEvent('HelpCentreCOVID19')
                }}
              />

              <Link
                icon={{
                  off: require('@asset/icons/help/btn-faqs.png'),
                  on: require('@asset/icons/help/btn-faqs-on.png')
                }}
                title={__('PUK')}
                onPress={() => {
                  logClickEvent('HelpCentrePUK')
                  if (!(this.state.pages.puk && this.state.pages.puk.id)) {
                    this.fetchContent('puk')
                  }
                  this.refs.modalPuk.open()
                }}
              />

              <Link
                icon={{
                  off: require('@asset/icons/help/btn-chat.png'),
                  on: require('@asset/icons/help/btn-chat-on.png')
                }}
                title={__('Chat with Customer Care Agent')}
                onPress={() => {
                  logClickEvent('HelpCentreChat')
                  openChatBot()
                }}
              />

              <Link
                icon={{
                  off: require('@asset/icons/help/btn-store.png'),
                  on: require('@asset/icons/help/btn-store-on.png')
                }}
                title={__('Locate '+ APP_DETAILS.APP_NAME +' Store')}
                onPress={() => {
                  logClickEvent('HelpCentreStoreLocator')
                  navigate('PublicStore')
                }}
              />

              <Link
                icon={{
                  off: require('@asset/icons/help/btn-feedback.png'),
                  on: require('@asset/icons/help/btn-feedback-on.png')
                }}
                title={__('Feedback')}
                onPress={() => {
                  logClickEvent('HelpCentreFeedback')
                  SectionProvider.showFeedback()
                }}
              />

              <Link
                icon={{
                  off: require('@asset/icons/help/btn-submit-nin.png'),
                  on: require('@asset/icons/help/btn-submit-nin-on.png')
                }}
                title={__('Submit Your NIN')}
                onPress={() => {
                  logClickEvent('HelpCentreSubmitNIN')
                  navigate('UserSubmitNIN')
                }}
              />

              <AccordionContent
                icon={{
                  off: require('@asset/icons/help/btn-complaints.png'),
                  on: require('@asset/icons/help/btn-complaints-on.png')
                }}
                title={__('Complaints')}
                id='complaints'
                content={this.state.pages.complaints}
                fetchContent={this.fetchContent}
                onOpened={() => {
                  logClickEvent('HelpCentreComplaints')
                }}
              />

              <AccordionContent
                icon={{
                  off: require('@asset/icons/help/btn-hotline.png'),
                  on: require('@asset/icons/help/btn-hotline-on.png')
                }}
                title={__('Whistle blowing Hotline')}
                id='whistleBlowingHotline'
                content={this.state.pages.whistleBlowingHotline}
                fetchContent={this.fetchContent}
                onOpened={() => {
                  logClickEvent('HelpCentreWhistleBlowingHotline')
                }}
              />

              <AccordionContent
                icon={{
                  off: require('@asset/icons/help/btn-legal.png'),
                  on: require('@asset/icons/help/btn-legal-on.png')
                }}
                title={__('Legal')}
                id='legal'
                content={this.state.pages.legal}
                fetchContent={this.fetchContent}
                onOpened={() => {
                  logClickEvent('HelpCentreLegal')
                }}
              />

              <AccordionContent
                icon={{
                  off: require('@asset/icons/help/btn-security.png'),
                  on: require('@asset/icons/help/btn-security-on.png')
                }}
                title={__('Security')}
                id='security'
                content={this.state.pages.security}
                fetchContent={this.fetchContent}
                onOpened={() => {
                  logClickEvent('HelpCentreSecurity')
                }}
              />

              <AccordionContent
                icon={{
                  off: require('@asset/icons/help/btn-terms-conditions.png'),
                  on: require('@asset/icons/help/btn-terms-conditions-on.png')
                }}
                title={__('Terms & Conditions')}
                id='terms'
                content={this.state.pages.terms}
                fetchContent={this.fetchContent}
                onOpened={() => {
                  logClickEvent('HelpCentreTerms')
                }}
              />

              <Link
                icon={{
                  off: require('@asset/icons/help/btn-contact.png'),
                  on: require('@asset/icons/help/btn-contact.png')
                }}
                title={__('Contact Us')}
                onPress={() => {
                  logClickEvent('HelpCentreContactUs')
                  this.refs.modalCall.open()
                }}
              />
            </View>
          </ScrollView>
        </Content>
        <Modal
          ref='modalProfile'
          position='bottom'
          swipeDirection='down'
          onSwipe={this.closeModal}
          isOpen={this.state.isOpen}
          onClosed={() =>
            this.setState({
              isOpen: false
            })}
          isDisabled={this.state.isDisabled}
          style={styles.modalProfile}
        >
          <View style={styles.profileSelect}>
            <RadioButton
              variant='default'
              style={this.state.profile === 'P' ? styles.profileRow : styles.profileRowActive}
              checked={this.state.profile === 'P'}
              onChange={() => { this.setState({ profile: 'P' }) }}
              color='dark'
              prefix={
                <Button style={styles.recognitionRow} onPress={() => { navigate('') }}>
                  <Image source={require('@asset/icons/play.png')} style={styles.recognitionImg} resizeMode='contain' />
                  <View>
                    <Text style={styles.recognitionText}>Andrea</Text>
                    <Text style={styles.recognitionNo}>8939179809</Text>
                  </View>
                </Button>
              }
            />
            <RadioButton
              checked={this.state.profile === 'F'}
              style={this.state.profile === 'F' ? styles.profileRow : styles.profileRowActive}
              onChange={() => { this.setState({ profile: 'F' }) }}
              color='dark'
              prefix={
                <Button style={styles.recognitionRow} onPress={() => { navigate('') }}>
                  <Image source={require('@asset/icons/play.png')} style={styles.recognitionImg} resizeMode='contain' />
                  <View>
                    <Text style={styles.recognitionText}>Andrea</Text>
                    <Text style={styles.recognitionNo}>8939179809</Text>
                  </View>
                </Button>
              }
            />
            <RadioButton
              checked={this.state.profile === 'R'}
              style={this.state.profile === 'R' ? styles.profileRow : styles.profileRowActive}
              onChange={() => { this.setState({ profile: 'R' }) }}
              color='dark'
              prefix={
                <Button style={styles.recognitionRow} onPress={() => { navigate('') }}>
                  <Image source={require('@asset/icons/play.png')} style={styles.recognitionImg} resizeMode='contain' />
                  <View>
                    <Text style={styles.recognitionText}>Andrea</Text>
                    <Text style={styles.recognitionNo}>8939179809</Text>
                  </View>
                </Button>
              }
            />
          </View>
        </Modal>
        <Modal
          ref='modalChat'
          position='bottom'
          swipeDirection='down'
          onSwipe={this.closeModal}
          isOpen={this.state.isOpen}
          onClosed={() =>
            this.setState({
              isOpen: false
            })}
          isDisabled={this.state.isDisabled}
          style={styles.modalChat}
        >
          <View>
            <View style={styles.row}>
              <Image source={require('@asset/icons/play.png')} style={styles.chatImg} resizeMode='contain' />
              <View style={styles.chatAssist}>
                <Text style={styles.chatAssistText}>Hi there! Welcome to My {APP_DETAILS.APP_NAME}. How can</Text>
                <Text style={styles.chatAssistText}>we,help you today?</Text>
              </View>
            </View>
            <View style={styles.calText}>
              <Text style={styles.chatAssistText}>Btw, What Should I Call You?</Text>
            </View>
          </View>
          <View style={styles.footerBg}>
            <View style={styles.footer}>
              <View style={styles.chatFtr}>
                <Image source={require('@asset/icons/play.png')} style={styles.emojiImg} />
                <TextInput
                  placeholder={__('Write your message...')}
                  placeholderTextColor='rgba(0, 0, 0, 0.3)'
                  style={styles.chatInput}
                />
              </View>
              <Image source={require('@asset/icons/play.png')} style={styles.sendImg} resizeMode='contain' />
            </View>
          </View>
        </Modal>
        <Modal
          ref='modalCall'
          position='bottom'
          swipeDirection='down'
          onSwipe={this.closeModal}
          style={styles.modalCall}
        >
          <Text style={styles.callHeader}>Our crew is there to assist you 24/7</Text>
          <Button style={styles.callLog} onPress={() => openPhone(this.state.contact.call_us)}>
            <Text style={styles.callLogText}>My {APP_DETAILS.APP_NAME} Toll Free number</Text>
            <View style={styles.callLog2}>
              <Icon name='call-outline' type='Ionicons' style={styles.callLogIcon} />
              <Text style={styles.callNumb}>{this.state.contact.call_us}</Text>
            </View>
          </Button>
          <Button style={styles.callLog} onPress={() => openPhone(this.state.contact.field_troll_free_number)}>
            <Text style={styles.callLogText}>Non - My {APP_DETAILS.APP_NAME } number</Text>
            <View style={styles.callLog2}>
              <Icon name='call-outline' type='Ionicons' style={styles.callLogIcon} />
              <Text text='regular' size='text14' color='dark' style={styles.callNumb}>{this.state.contact.field_troll_free_number}</Text>
            </View>
          </Button>
        </Modal>
        <Modal
          ref='modalPuk'
          position='bottom'
          swipeDirection='down'
          onSwipe={this.closeModal}
          style={styles.modalPuk}
        >
          <View style={styles.pukContent}>
            {
              this.state.pages.puk && this.state.pages.puk.id
                ? (
                  <>
                    <View style={styles.pukBg}>
                      <Image source={require('@asset/images/lock.png')} resizeMode='contain' style={styles.pukImg} />
                    </View>
                    <Text style={styles.pukTitle}>{this.state.pages.puk.title}</Text>
                    <Text style={styles.pukDesc}>{this.state.pages.puk.summary}</Text>
                    <Text style={styles.pukNo}>{this.state.pages.puk.field_puk_pin}</Text>
                    <View style={styles.pukRow}>
                      <Text style={styles.pukLabel}>{__('Note:')}</Text>
                      <View style={styles.pukCol}>
                        <Text style={styles.pukNotes}>{this.state.pages.puk.description}</Text>
                      </View>
                    </View>
                  </>
                  )
                : null
            }
          </View>
        </Modal>
        <WalkThroughPlayer
          walkthroughSelected={this.state.walkthroughSelected}
          ref={this.refWalkThroughPlayer}
        />
        <Modal
          ref='modalVideo'
          position='center'
          swipeDirection='down'
          onSwipe={this.closeModal}
          isOpen={this.state.isOpen}
          onClosed={() =>
            this.setState({
              isOpen: false
            })}
          isDisabled={this.state.isDisabled}
          style={styles.modalVideo}
        >
          {/* }
          <YouTube
            videoId='k9u17i_3N1s'
            apiKey='AIzaSyAm5kie8XaLxZvWqQ5ayPJ404lbbvqJrGo'
            loop
            onReady={(e) => { this.setState({ isReady: true }) }}
            onChangeState={(e) => { this.setState({ status: e.state }) }}
            onChangeQuality={(e) => { this.setState({ quality: e.quality }) }}
            onError={(e) => { this.setState({ error: e.error }) }}
            style={{ alignSelf: 'stretch', height: 300, marginVertical: 10 }}
          />
          { */}
        </Modal>
      </Container>
    )
  }
}

const HelpCentre = (props) => {
  const key = useNumberBaseKey(props)

  return <HelpCentreUI key={key} {...props} />
}

export default connect(({ session }) => ({ session }))(HelpCentre)
