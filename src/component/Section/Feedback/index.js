import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import Modal from 'react-native-modalbox'
import { Rating } from 'react-native-ratings'

import styles from './styles'
import Support from '@src/component/Support'
import { Icon } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import { bind } from '@src/utility/component'
import { URLS } from '@src/config/url'
import { httpCms } from '@src/utility/http'
import { __ } from '@src/utility/translation'
import { connect } from 'react-redux'
import { store } from '@src/store'

const renderTypes = {
  webform_rating: 'renderQuestionRating',
  checkbox: 'renderQuestionCheckbox',
  radios: 'renderQuestionRadios',
  textarea: 'renderQuestionTextarea'
}

class PageView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      loading: true,
      questions: [],
      answers: {}
    }

    bind(this)

    this.onOpened = this.onOpened.bind(this)
    this.onClosed = this.onClosed.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.fetchForm = this.fetchForm.bind(this)
    this.onStartRating = this.onStartRating.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this)
    this.onChangeRadio = this.onChangeRadio.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.renderQuestionTextarea = this.renderQuestionTextarea.bind(this)
    this.renderQuestionCheckbox = this.renderQuestionCheckbox.bind(this)
    this.renderQuestionRadios = this.renderQuestionRadios.bind(this)
    this.renderQuestionRating = this.renderQuestionRating.bind(this)
    this.renderQuestion = this.renderQuestion.bind(this)
    this.renderQuestions = this.renderQuestions.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }

  onOpened () {
    this.setState({
      isOpened: true
    })
  }

  onClosed () {
    this.setState({
      isOpened: false
    })
  }

  async open () {
    await this.promisedSetState({
      loading: true,
      questions: [],
      answers: {}
    })
    await this.fetchForm()
    await this.refModal.open()
  }

  async close () {
    await this.refModal.close()
  }

  async fetchForm () {
    await Support.showLoading()
    try {
      const r = (await httpCms.get(URLS.FEEDBACK_FIELDS)).data
      const questions = []
      Object.keys(r.questions).forEach(key => {
        if (key.indexOf('#') !== 0 && typeof r.questions[key] === 'object') {
          const question = {
            // id: r.questions[key]['#webform_id'],
            id: r.questions[key]['#webform_key'],
            type: r.questions[key]['#type'],
            question: r.questions[key]['#title']
          }
          // console.log(r.questions[key]['#type'] === 'webform_rating', question)
          if (r.questions[key]['#type'] === 'webform_rating') {
            questions.push(question)
          } else if (r.questions[key]['#type'] === 'checkbox') {
            questions.push({ ...question, options: Object.values(r.questions[key]['#options']) })
          } else if (r.questions[key]['#type'] === 'radios') {
            questions.push({ ...question, options: Object.values(r.questions[key]['#options']) })
          } else if (r.questions[key]['#type'] === 'textarea') {
            questions.push(question)
          }
        }
      })
      await this.promisedSetState({
        questions
      })
    } catch (e) {
      this.close()
    }
    await this.promisedSetState({
      loading: false
    })
    await Support.hideLoading()
  }

  async onSubmit () {
    await Support.showLoading()
    try {
      const session = store.getState().session
      const values = {
        webform_id: 'feedback_1',
        user_id: session?.user?.userid || '',
        ...this.state.answers
      }
      const r = (await httpCms.post(URLS.FEEDBACK_SUBMIT, values)).data
      await Support.showSuccess({
        message: ''
      })
      this.close()
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
  }

  onStartRating (id, rating) {
    this.setState({ answers: { ...this.state.answers, [id]: rating } })
  }

  onChangeText (id, v) {
    this.setState({ answers: { ...this.state.answers, [id]: v } })
  }

  onChangeCheckbox (id, v) {
    const values = [...(this.state.answers[id] || [])]
    const index = values.indexOf(v)
    if (index === -1) {
      values.push(v)
    } else {
      values.splice(index, 1)
    }
    this.setState({ answers: { ...this.state.answers, [id]: values } })
  }

  onChangeRadio (id, v) {
    this.setState({ answers: { ...this.state.answers, [id]: v } })
  }

  renderQuestionTextarea (question) {
    const onChangeText = (v) => this.onChangeText(question.id, v)
    return (
      <View style={styles.feedbackGroup}>
        <View style={styles.feedbackRow}>
          <Text style={styles.feedbackQuestion}>{question.question}</Text>
        </View>
        <View style={styles.feedbackCol}>
          <TextInput
            style={styles.feedbackInput}
            placeholder={__('Write Something Here!')}
            value={this.state.answers[question.id]}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    )
  }

  renderQuestionCheckbox (question) {
    return (
      <View style={styles.feedbackGroup}>
        <View style={styles.feedbackRow}>
          <Text style={styles.feedbackQuestion}>{question.question}</Text>
        </View>
        <View style={styles.feedbackRow}>
          <View style={styles.feedbackOption}>
            {question.options.map((option, i) => {
              const selected = this.state.answers[question.id] && this.state.answers[question.id].includes(option)
              const styleMain = [styles.feedbackCheck]
              if (selected) {
                styleMain.push(styles.feedbackCheckActive)
              }
              return (
                <Button
                  key={i}
                  style={styleMain}
                  onPress={() => this.onChangeCheckbox(question.id, option)}
                >
                  <Text style={selected ? styles.feedbackCheckActiveText : styles.feedbackCheckText}>{option}</Text>
                </Button>
              )
            })}
          </View>
        </View>
      </View>
    )
  }

  renderQuestionRadios (question) {
    return (
      <View style={styles.feedbackGroup}>
        <View style={styles.feedbackRow}>
          <Text style={styles.feedbackQuestion}>{question.question}</Text>
        </View>
        <View style={styles.feedbackRow}>
          <View style={styles.feedbackOption}>
            {question.options.map((option, i) => {
              const selected = this.state.answers[question.id] && this.state.answers[question.id].includes(option)
              const styleMain = [styles.feedbackCheck]
              if (selected) {
                styleMain.push(styles.feedbackCheckActive)
              }
              return (
                <Button
                  key={i}
                  style={styleMain}
                  onPress={() => this.onChangeRadio(question.id, option)}
                >
                  <Text style={selected ? styles.feedbackCheckActiveText : styles.feedbackCheckText}>{option}</Text>
                </Button>
              )
            })}
          </View>
        </View>
      </View>
    )
  }

  renderQuestionRating (question) {
    const onStartRating = (value) => this.onStartRating(question.id, value)
    return (
      <View style={styles.feedbackGroup}>
        <View style={styles.feedbackRow}>
          <Text style={styles.feedbackQuestion}>{question.question}</Text>
        </View>
        <View style={styles.feedbackRow}>
          <Rating
            type='star'
            startingValue={0}
            ratingCount={5}
            showRating={false}
            imageSize={32}
            onStartRating={onStartRating}
          />
        </View>
      </View>
    )
  }

  renderQuestion (question) {
    return (
      <View key={question.id}>
        {this[renderTypes[question.type]](question)}
      </View>
    )
  }

  renderQuestions () {
    if (this.state.loading) {
      return <View style={{ flext: 1 }}><ActivityIndicator size='small' style={{ zIndex: 100 }} /></View>
    }

    return (
      <>
        {this.state.questions.map(this.renderQuestion)}

        <Button style={styles.feedbackBtn} onPress={this.onSubmit}>
          <Text style={styles.feedbackBtnText}>{__('Submit')}</Text>
        </Button>
      </>
    )
  }

  renderContent () {
    return (
      <>
        <View style={styles.modalClose}>
          <Button style={styles.modalCloseBtn} onPress={this.close}>
            <Icon name='close' type='AntDesign' style={styles.modalCloseBtnIcon} />
          </Button>
        </View>
        <View style={styles.feedbackHeader}>
          <Text style={styles.feedbackHeaderTitle}>{__('Feedback')}</Text>
        </View>

        <ScrollView>
          {this.renderQuestions()}
        </ScrollView>
      </>
    )
  }

  render () {
    return (
      <Modal
        ref={c => (this.refModal = c)}
        position='bottom'
        backButtonClose
        backdropPressToClose
        swipeToClose={false}
        style={styles.modal}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {this.state.isOpened ? this.renderContent() : null}
      </Modal>
    )
  }
}

export default PageView
