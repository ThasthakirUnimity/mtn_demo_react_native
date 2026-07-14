import React from 'react'

import LoginAlert from './User/LoginAlert'
import PageView from './Page/View'
import UserNumberSelection from './User/NumberSelection'
import Feedback from './Feedback'
import ContactSelection from './ContactSelection'

class Provider extends React.PureComponent {
  static loginAlert
  static showLoginAlert () {
    loginAlert.open()
  }

  static pageView
  static showPageView (...args) {
    pageView.open.apply(null, args)
  }

  static userNumberSelection
  static showUserNumberSelection (...args) {
    userNumberSelection.open.apply(null, args)
  }

  static feedback
  static showFeedback () {
    feedback.open()
  }

  static contactSelection
  static showContactSelection (...args) {
    contactSelection.open.apply(null, args)
  }

  render () {
    return (
      <>
        <LoginAlert ref={c => (loginAlert = c)} />

        <PageView ref={c => (pageView = c)} />

        <UserNumberSelection ref={c => (userNumberSelection = c)} />

        <Feedback ref={c => (feedback = c)} />

        <ContactSelection ref={c => (contactSelection = c)} />
      </>
    )
  }
}

export default Provider
