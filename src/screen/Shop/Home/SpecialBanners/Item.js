import React from "react"
import { Image, View } from "react-native"

import styles from "./../styles"

const Item = ({ banner }) => {
    return (
        <View style={styles.slide}>
            <Image source={{uri: banner}} style={styles.slideImg} resizeMode='contain' />
        </View>
    )
}

export default Item