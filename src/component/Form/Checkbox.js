import React from 'react'

import { Icon } from '@src/component/Basic'
import { Button } from '@src/component/Form'

const Checkbox = (props) => {
  const { style, checked, onChange, prefix, suffix, color, size, ...p } = props

  p.onPress = () => {
    onChange && onChange(!checked)
  }

  const iconStyle = { color: color || 'black' }
  if (size) {
    iconStyle.fontSize = size
  }
  if (prefix || suffix) {
    iconStyle.paddingHorizontal = 5
  }

  return (
    <Button style={props.style ? [styles.container, props.style] : styles.container} {...p}>
      {prefix}
      <Icon name={checked ? 'check-square' : 'square'} type='Feather' style={iconStyle} />
      {suffix}
    </Button>
  )
}

const styles = {
  container: {
    paddingHorizontal: 5
  }
}

export default Checkbox
