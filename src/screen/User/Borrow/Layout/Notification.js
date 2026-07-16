import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'

import { Icon, Text, Container, Content } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import Header from '@src/component/Header'
import { DarkStatusBar } from '@src/component/StatusBar'
import { __ } from '@src/utility/translation'
import theme from '@src/theme/styles'
import styles from './../styles'
import { httpCms } from '@src/utility/http'
import { URLS } from '@src/config/url'

const Notification = () => {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedIndex, setExpandedIndex] = useState(null)

  useEffect(() => {
    initiate()
  }, [])

  const initiate = async () => {
    try {
      const result = (await httpCms.get(URLS.HELP_CONTENT)).data
      if (Array.isArray(result.rows) && result.rows.length) {
        setNotifications(result.rows)
      }
    } catch (e) {
      console.error('Error fetching notifications:', e)
    } finally {
      setLoading(false)
    }
  }

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  if (loading) {
    return (
      <Container>
        <DarkStatusBar />
        <Header default leftType='back' title={__('Notifications')} titleColor='light' />
        <Content style={theme.layout}>
          <View style={{ padding: 20 }}>
            <Text>{__('Loading...')}</Text>
          </View>
        </Content>
      </Container>
    )
  }

  return (
    <Container>
      <DarkStatusBar />
      <Header default leftType='back' title={__('Notifications')} titleColor='light' />
      <Content style={theme.layout}>
        <ScrollView>
          {notifications.length > 0 ? (
            <View style={{ padding: 15 }}>
              {notifications.map((notification, index) => (
                <View key={notification.id} style={styles.alert}>
                  <View style={styles.alertHeader}>
                    <Text style={styles.alertHeaderTitle}>{notification.title || __('Notification')}</Text>
                  </View>
                  <View style={styles.alertRow}>
                    <Text style={styles.alertDesc}>
                      {expandedIndex === index ? notification.content : notification.summary}
                    </Text>
                  </View>
                  {notification.content && notification.content !== notification.summary && (
                    <Button style={styles.alertRow} onPress={() => toggleExpanded(index)}>
                      <Text style={styles.alertMore}>
                        {__(expandedIndex === index ? 'Show Less' : 'Know More')}
                      </Text>
                      <Icon 
                        name={expandedIndex === index ? 'keyboard-arrow-up' : 'keyboard-arrow-right'} 
                        type='MaterialIcons' 
                        style={styles.alertMoreIcon} 
                      />
                    </Button>
                  )}
                </View>
              ))}
            </View>
          ) : (
            <View style={{ padding: 20 }}>
              <Text style={{ textAlign: 'center' }}>{__('No notifications available')}</Text>
            </View>
          )}
        </ScrollView>
      </Content>
    </Container>
  )
}

export default Notification
