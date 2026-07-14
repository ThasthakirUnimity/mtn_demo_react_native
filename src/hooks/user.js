import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'

export const useNumberBaseKey = (props) => {
  const [key, setKey] = useState('a-')

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      let mobilenumber = '-a'
      if (props.session.numbers[props.session.numberIndex]) {
        mobilenumber =
            props.session.numbers[props.session.numberIndex]?.number || ''
      }
      setKey(mobilenumber)
    }
  }, [props.session.numbers, props.session.numberIndex, isFocused])

  return key
}
