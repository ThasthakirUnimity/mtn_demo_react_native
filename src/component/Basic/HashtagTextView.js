import { navigate } from '@src/navigation'
import { extractHashTagParts } from '@src/utility/core'
import { logClickEvent } from '@src/utility/analytics'
import React, { useMemo, useState } from 'react'
import { Text } from 'react-native'

const HashtagTextView = (props) => {
  const parts = useMemo(() => extractHashTagParts(props.children), [props.children])

  const onHashtagPress = (hashtag) => {
    const term = hashtag.substr(1)
    if (term && props.keywords && props.keywords.length) {
      const selected = props.keywords.find(r => r && r?.value.toLowerCase() == term.toLowerCase())
      if (selected) {
        logClickEvent('HashtagClick', {
          id: selected.key,
          term: selected.value
        })
        navigate('PublicHashtagView', { id: selected.key, term: selected.value })
      }
    }
  }

  return (
    <Text
      style={props.style}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
    >
      {parts.map(part => {
        return part.matched
          ? (
            <Mention
              onHashtagPress={props.isNavigateOnPress ? onHashtagPress : props.onHashtagPress}
            >
              {part.text}
            </Mention>
            )
          : <Text>{part.text}</Text>
      })}
    </Text>
  )
}

const Mention = (props) => {
  return (
    <Text
      style={{
        color: props.mentionHashtagColor || '#0384BE'
      }}
      onPress={() => {
        if (props.onHashtagPress) {
          props.onHashtagPress(props.children)
        }
      }}
    >
      {props.children}
    </Text>
  )
}

export default HashtagTextView
