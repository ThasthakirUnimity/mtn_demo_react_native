import React from 'react'

import { Icon, Text } from '@src/component/Basic'
import { Button } from '@src/component/Form'
import { __ } from '@src/utility/translation'
import styles from './../../styles'

const Item = ({ item, selectedPlan, select }) => {
    const selected = selectedPlan?.value === item.value
    const _select = () => select(item)
    return (
        <Button
            style={selected ? styles.shareItemActive : styles.shareItem}
            onPress={_select}
        >
            <Icon name={selected ? 'radio-button-on' : 'radio-button-off'} type='Ionicons' style={selected ? styles.shareItemActiveIcon : styles.shareItemIcon} />
            <Text style={selected ? styles.shareItemActiveText : styles.shareItemText}>{item.label}</Text>
        </Button>
    )
}

export default Item
