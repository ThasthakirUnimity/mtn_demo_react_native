import { Button } from '@src/component/Form'
import { navigate } from '@src/navigation'
import { __ } from '@src/utility/translation'
import React from 'react'
import { Text, View } from 'react-native'

import Accordion from './Accordion'
import styles from './styles'

export default ({ id, icon, title, content, fetchContent, onOpened }) => {
  const onMore = () => navigate('PublicPageView', { id })
  return (
    <Accordion
      icon={icon}
      title={title}
      onOpened={() => {
        onOpened && onOpened()
        if (!(content && content.id)) {
          fetchContent(id)
        }
      }}
      renderContent={() => {
        if (content) {
          return (
            <View style={styles.helpContent}>
              <Text style={styles.helpDesc}>{content?.summary || ''}</Text>
              <Button onPress={onMore} style={styles.helpMore}>
                <Text style={styles.helpMoreText}>{__('View more')}</Text>
              </Button>
            </View>
          )
        }
        return null
      }}
    />
  )
}
