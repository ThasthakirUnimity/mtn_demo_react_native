import React from 'react'
import { FlatList, View } from 'react-native'

import Item from './Item'
import Placeholder from './Placeholder'
import styles from '../styles'

class List extends React.Component {
  constructor (props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  renderTemplate () {
    return <Placeholder />
  }

  renderItem ({ item }) {
    return (
      <Item
        item={item}
      />
    )
  }

  render () {
    return (
      <View>
        <FlatList
          data={this.props.fetching ? [1, 2, 3, 4] : this.props.list}
          contentContainerStyle={styles.gamesContainer}
          showsHorizontalScrollIndicator={false}
          renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          keyExtractor={item => (item.id)}
        />
      </View>
    )
  }
}

export default List
