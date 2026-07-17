import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './styles'
import { COLOR } from '@src/theme/typography'

const getGreeting = () => {
  const h = new Date().getHours()
  if (h < 12) return __('Good Morning')
  if (h < 17) return __('Good Afternoon')
  return __('Good Evening')
}

const HomeHeader = ({
  userName,
  phone,
  planType,
  onSearch,
  onNotification,
  onNumberSelect,
  renderQuickTour,
}) => (
  <LinearGradient
    colors={[COLOR.PRIMARY_LIGHT, COLOR.LIGHT]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.hdrGradient}
  >
    <View style={styles.hdrTopRow}>
      {renderQuickTour({
        category: 'Search',
        shape: 'circle',
        children: (
          <Button style={styles.hdrIconBtn} onPress={onSearch}>
            <Icon name='search' type='Feather' style={styles.hdrIcon} />
          </Button>
        ),
      })}
      {renderQuickTour({
        category: 'Notification',
        shape: 'circle',
        children: (
          <Button style={styles.hdrIconBtn} onPress={onNotification}>
            <Icon name='bell' type='Fontisto' style={styles.hdrIcon} />
          </Button>
        ),
      })}
    </View>

    <Text style={styles.hdrGreeting}>{getGreeting()},</Text>
    <Text style={styles.hdrUsername}>{(userName || __('Guest')).toUpperCase()}</Text>

    <Button style={styles.hdrPhoneRow} onPress={onNumberSelect}>
      <Text style={styles.hdrPhone}>{phone}</Text>
      {!!phone && (
        <View style={styles.hdrBadge}>
          <Text style={styles.hdrBadgeText}>{planType || 'Prepaid'} ▼</Text>
        </View>
      )}
    </Button>
  </LinearGradient>
)

export default HomeHeader
