import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Support from '@src/component/Support'
import { logout } from '@src/store/reducers/session'
import { resetBrand } from '@src/store/reducers/brand'
import { resetDesignTokens } from '@src/theme/applyTheme'
import { navigateReset } from '@src/navigation'

class Logout extends React.Component {
  async componentDidMount (c) {
    await Support.showLoading()
    setTimeout(async () => {
      if (this.props.session.isLoggedIn) {
        await this.props.logout()
      }
      // Reset brand selection and design tokens so next user picks fresh
      this.props.resetBrand()
      resetDesignTokens()
      navigateReset('PublicBrand')
      Support.hideLoading()
    }, 500)
  }

  render () {
    return <View />
  }
}

const mapStateToProps = (state) => ({
  session: state.session
})

const mapDispatchToProps = { logout, resetBrand }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout)
