import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import { __ } from '@src/utility/translation'
import Category from "./Category";
import styles from "./../styles";

const Categories = ({ selectedCategory, list, onSelect }) => {
    const renderCategory = (item) => (<Category key={item.id} selectedCategory={selectedCategory} category={item} onSelect={onSelect} />)
    return (
        <View style={styles.box}>
            <View style={styles.boxTabs}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {list.map(renderCategory)}
                </ScrollView>
            </View>
        </View>
    )
}


export default Categories