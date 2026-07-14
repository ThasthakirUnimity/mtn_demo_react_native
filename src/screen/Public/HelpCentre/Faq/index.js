import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './../styles'
import List from './List'

const Faq = ({ list }) => {
  const [tab, setTab] = useState(null)

  const selectTab = (category) => {
    setTab(category == tab ? null : category)
  }

  return (
    <View style={styles.faqData}>
      {list.map(item => {
        const selected = item.category == tab
        let content
        if (selected) {
          content = (<List list={item.list} />)
        }
        return (
          <View key={item.category}>
            <Button
              style={styles.faqRow}
              onPress={() => selectTab(item.category)}
            >
              <Text style={styles.faqCategory}>{item.category}</Text>
              <Icon name={selected ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} type='MaterialIcons' style={styles.faqBtnIcon} />
            </Button>
            {content}
          </View>
        )
      })}
    </View>
  )
}

export default Faq
