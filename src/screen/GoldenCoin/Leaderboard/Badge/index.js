import React from 'react'
import { FlatList, View, TouchableWithoutFeedback } from 'react-native'
import { Text } from '@src/component/Basic'
import { navigate } from '@src/navigation'
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
      <>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>{__('Badges')}</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              navigate('GoldenCoinBadges')
            }}
          >
            <Text style={styles.viewBtn}>{__('View All')}</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.leaderboard}>
          <FlatList
            data={this.props.fetching ? [1, 2, 3, 4] : this.props.list}
            showsHorizontalScrollIndicator={false}
            renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          />
        </View>
      </>
    )
  }
}
