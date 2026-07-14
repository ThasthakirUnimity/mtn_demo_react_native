import { Button } from '@src/component/Form'
import Support from '@src/component/Support'
import styles from './styles'
import { __ } from '@src/utility/translation'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Calendar as CalendarPicker } from 'react-native-calendars'
import { COLOR, FAMILY } from '@src/theme/typography'
import { Icon } from '@src/component/Basic'

const edgeDayStyle = {
  color: '#09143C',
  textColor: 'white'
}

const middleDayStyle = {
  color: '#ADD8E6',
  textColor: 'white'
}

const dateFromLimit = 180
const dateRangeLimit = 20

const Calendar = ({ generate }) => {
  const [minDate, setMinDate] = useState(null)
  const [maxDate] = useState(moment().format('YYYY-MM-DD'))
  const [dayFrom, setDayFrom] = useState(null)
  const [dayTo, setDayTo] = useState(null)
  const [markedDates, setMarkedDates] = useState({})

  useState(() => {
    setMinDate(moment().subtract(dateFromLimit, 'days').format('YYYY-MM-DD'))
  }, [])

  useEffect(() => {
    generateMarkedDates()
  }, [dayFrom, dayTo])

  const onDayPress = ({ timestamp }) => {
    const m = moment(timestamp, 'x')
    if (dayFrom) {
      if (m.isAfter(dayFrom, 'day')) {
        const days = m.diff(dayFrom, 'days') + 1
        if (days <= dateRangeLimit) {
          setDayTo(m)
        } else {
          Support.showError({
            layout: 'toast',
            message: __('Please select date range within ' + dateRangeLimit + ' days')
          })
        }
      } else {
        Support.showError({
          layout: 'toast',
          message: __('Please select after date')
        })
      }
    } else {
      setDayFrom(m)
    }
  }

  const generateMarkedDates = () => {
    const dates = []
    if (dayFrom && dayTo) {
      const now = dayFrom.clone()
      while (now.isSameOrBefore(dayTo)) {
        dates[now.format('YYYY-MM-DD')] = { ...middleDayStyle }
        now.add(1, 'days')
      }
      dates[dayFrom.format('YYYY-MM-DD')] = {
        startingDay: true,
        ...edgeDayStyle
      }
      dates[dayTo.format('YYYY-MM-DD')] = {
        endingDay: true,
        ...edgeDayStyle
      }
    } else if (dayFrom) {
      dates[dayFrom.format('YYYY-MM-DD')] = {
        startingDay: true,
        ...edgeDayStyle
      }
    }
    setMarkedDates(dates)
  }

  const _generate = () => {
    generate(dayFrom, dayTo)
  }

  return (
    <>
      <CalendarPicker
        minDate={minDate}
        maxDate={maxDate}
        markingType='period'
        markedDates={markedDates}
        onDayPress={onDayPress}
        theme={{
          textDayFontFamily: FAMILY.MTN_REGULAR,
          textMonthFontFamily: FAMILY.MTN_MEDIUM,
          textDayHeaderFontFamily: FAMILY.MTN_MEDIUM,
          todayButtonFontFamily: FAMILY.MTN_REGULAR,
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8'
        }}
        renderArrow={(d) => (<Icon type='MaterialCommunityIcons' name={d === 'left' ? 'arrow-left-drop-circle-outline' : 'arrow-right-drop-circle-outline'} style={{ color: COLOR.DEFAULT }} />)}
      />
      <View style={styles.cal}>
        <Image source={require('@asset/images/bulb.png')} resizeMode='contain' />
        <View style={styles.calCol}>
          <Text style={styles.calDesc}>
            Statement can be generated for last {dateFromLimit} days. The Date
            range can be max {dateRangeLimit} days Apart.
          </Text>
        </View>
      </View>
      {dayFrom && dayTo
        ? (
          <View>
            <Button style={styles.calBtn} onPress={_generate}>
              <Text style={styles.calBtnText}>{__('Generate')}</Text>
            </Button>
          </View>
          )
        : null}
    </>
  )
}

export default Calendar
