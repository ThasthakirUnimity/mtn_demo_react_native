import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import { __ } from '@src/utility/translation'
import Category from "./Category";
import Image from "./Image";
import styles from "./../styles";

const Categories = ({ selectedCategory, list, onSelect }) => {
    const length = list.length
    const renderCategory = (item) => (<Category
        key={item.id}
        selectedCategory={selectedCategory}
        category={item}
        onSelect={onSelect}
    />)
    const renderImage = (item, index) => (<Image
        key={item.id}
        isFirst={index === 1}
        isLast={index === length - 1}
        selectedCategory={selectedCategory}
        category={item}
        onSelect={onSelect}
    />)
    return (
        <View style={styles.box}>
            <View style={[styles.boxTabs, { marginVertical: 30 }]}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {list.map(renderCategory)}
                </ScrollView>
            </View>
            <View style={styles.boxHeader}>
                <Text style={styles.boxHeaderTitle}>{__('What would you like to relish on?')}</Text>
            </View>
            <View style={styles.boxSlider}>
                {list.map(renderImage)}
            </View>
        </View>
    )
}


export default Categories