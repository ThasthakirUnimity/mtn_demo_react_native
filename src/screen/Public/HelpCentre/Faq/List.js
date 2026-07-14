import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './../styles'

const Faq = ({ list }) => {
  const [tab, setTab] = useState(null)

  const selectTab = (id) => {
    setTab(id == tab ? null : id)
  }

  return (
    <View style={styles.faqData}>
      {list.map(item => {
        const selected = item.id == tab
        let content
        if (selected) {
          content = (
            <>
              <Text style={styles.faqAns}>{item.answer}</Text>
            </>
          )
        }
        return (
          <View key={item.id}>
            <Button
              style={styles.faqRow}
              onPress={() => selectTab(item.id)}
            >
              <Text style={styles.faqTitle}>{item.question}</Text>
              <Icon name={selected ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} type='MaterialIcons'  style={styles.faqBtnIcon} />
            </Button>
            {content}
          </View>
        )
      })}
    </View>
  )
}

export default Faq
