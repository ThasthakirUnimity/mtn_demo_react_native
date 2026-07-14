import React from 'react';
import {ScrollView, View} from 'react-native';

import styles from './../../styles';
import Item from './Item';

const SubCategories = ({category, selectedCategory, selectCategory}) => {
  const renderItem = subCategory => (
    <Item
      category={category}
      subCategory={subCategory}
      selectedCategory={selectedCategory}
      selectCategory={selectCategory}
    />
  );
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.share}>
        <View style={styles.shareProf}>{category.childs.map(renderItem)}</View>
      </View>
    </ScrollView>
  );
};

export default SubCategories;
