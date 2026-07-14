import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'
import styles from '../styles'

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
      <View>
       <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Participate to Win</Text>
          <Button>
            <Text style={styles.viewBtn}>View All</Text>
          </Button>
        </View>
        <FlatList
          data={this.props.fetching ? [1, 2, 3, 4] : this.props.list}
          horizontal
          contentContainerStyle={styles.newContainer}
          showsHorizontalScrollIndicator={false}
          renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          keyExtractor={item => (item.id)}
        />
      </View>
    )
  }
}
