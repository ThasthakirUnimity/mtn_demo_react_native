import React, { forwardRef } from 'react'
import { TextInput as NativeTextInput } from 'react-native'

const TextInput = (props, ref) => {
  const { style, ...p } = props
  return (
    <NativeTextInput
      style={props.style ? [styles.container, props.style] : styles.container}
      {...p}
      ref={ref}
    />
  )
}

const styles = {
  container: {
  }
}

export default forwardRef(TextInput)
