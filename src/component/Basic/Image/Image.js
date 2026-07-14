import React, { memo } from 'react'
import { Image as NativeImage } from 'react-native'
import FastImage from 'react-native-fast-image'

export const getImageSize = (uri, success = () => {}, error = () => {}) => {
  NativeImage.getSizeWithHeaders(
    uri,
    {},
    success,
    error
  )
}

const Image = (props) => <FastImage {...props} />

export default memo(Image)
