import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@src/component/Basic'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@src/utility/translation'
import styles from '../styles'
import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { logClickEvent } from '@src/utility/analytics'

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
    return (
      <Item
        item={item}
        onClick={this.props.onClick}
      />
    )
  }

  render () {
    return (
      <View>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>{__('Walk Through')}</Text>
          <Button
            style={styles.headerBtn}
            onPress={() => {
              logClickEvent('HelpCentreWalkThroughViewAll')
              navigate('PublicWalkThroughList')
            }}
          >
            <Text style={styles.headerBtnText}>{__('View All')}</Text>
          </Button>
        </View>
        <FlatList
          data={this.props.fetching ? [1, 2, 3] : this.props.list}
          horizontal
          contentContainerStyle={styles.walkthroughContainer}
          showsHorizontalScrollIndicator={false}
          renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          keyExtractor={item => (item.id)}
        />
      </View>
    )
  }
}
