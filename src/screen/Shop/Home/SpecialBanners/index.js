import React from "react"
import { ScrollView } from "react-native"

import Item from "./Item"
import Placeholder from './Placeholder'
import styles from "./../styles"

const SpecialBanners = ({ banners, fetching }) => {
    if (fetching) {
        return <Placeholder />
    }
    const renderItem = (item) => (<Item banner={item} />)
    return (
        <ScrollView>
            {banners.map(renderItem)}
        </ScrollView>
    )
}

export default SpecialBanners