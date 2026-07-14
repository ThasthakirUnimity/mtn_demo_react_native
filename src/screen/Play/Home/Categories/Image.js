import { Button } from "@src/component/Form";
import React from "react";
import { Image as ImageNative, Text, View } from "react-native";

import { __ } from '@src/utility/translation'
import styles from "./../styles";

const Image = ({ selectedCategory, category, isFirst, isLast, onSelect }) => {
    if (category.id==='all') {
        return null
    }
    const selected = selectedCategory === category.id

    const imgStyle = [styles.boxSliderImg]
    const viewStyle = [styles.boxSliderView]
    if (selected) {
        imgStyle.push(styles.boxSliderActiveImg)
        viewStyle.push(styles.boxSliderActiveView)
    }
    if (isFirst) {
        imgStyle.push(styles.boxSliderFirstImg)
        viewStyle.push(styles.boxSliderFirstView)
    }
    if (isLast) {
        imgStyle.push(styles.boxSliderLastImg)
        viewStyle.push(styles.boxSliderLastView)
    }

    const _onPress = () => onSelect(category.id)

    return (
        <Button style={imgStyle} onPress={_onPress}>
            <ImageNative source={{ uri: category.img }} resizeMode='cover' style={imgStyle} />
            <View style={viewStyle}>
                <Text style={styles.boxSliderText}>{__(category.title)}</Text>
            </View>
        </Button>
    )
}

export default Image