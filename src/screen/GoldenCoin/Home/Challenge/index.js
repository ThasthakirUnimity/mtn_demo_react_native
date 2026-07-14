import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'

import Item from './Item'
import Placeholder from './Placeholder'
import styles from '../styles'
import { __ } from '@src/utility/translation'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  renderTemplate () {
    return <Placeholder />
  }

  renderItem ({ item }) {
    return (<Item item={item} />)
  }

  render () {
    return (
      <View>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>{__('Daily Challenges')}</Text>
          <Button>
            <Text style={styles.viewBtn}>{__('View All')}</Text>
          </Button>
        </View>
        <FlatList
          data={this.props.fetching ? [1, 2] : this.props.list}
          contentContainerStyle={styles.newContainer}
          showsHorizontalScrollIndicator={false}
          renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          keyExtractor={item => (item.id)}
        />
      </View>
    )
  }
}
