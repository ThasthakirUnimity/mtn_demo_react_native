import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'

import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'

import { __ } from '@src/utility/translation'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  renderTemplate() {
    return <Placeholder />
  }

  renderItem({ item }) {
    return (
      <Item
        language={this.props.language}
        item={item}
      />
    )
  }

  render() {
    return (
        <View style={styles.work}>
          <View style={styles.workRow}>
            <Text style={styles.workTitle}>{__('How it works')}</Text>
          </View>
          <FlatList
            data={this.props.fetching ? [1, 2, 3] : this.props.list}
            renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          />
        </View>
    )
  }
}
