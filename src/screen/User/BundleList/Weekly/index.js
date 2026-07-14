import React from 'react'
import { FlatList, TouchableOpacity,View } from 'react-native'
import { Container, Content, Icon, Text } from '@src/component/Basic'

import Item from './Item'
import styles from '../styles'
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
        <View>
          <View style={styles.weeklyHeader}>
            <Text style={styles.headerTitle}>{__('Weekly')}</Text>
            <Text style={styles.headerText}>{__('View All')}</Text>
          </View>
          <FlatList
            data={this.props.fetching ? [1, 2] : this.props.list}
            contentContainerStyle={styles.weeklyContainer}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </>
    )
  }
}
