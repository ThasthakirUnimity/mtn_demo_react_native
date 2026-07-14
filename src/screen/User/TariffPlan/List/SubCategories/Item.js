import React from 'react';
import {Text} from '@src/component/Basic';

import {Button} from '@src/component/Form';
import {__} from '@src/utility/translation';
import styles from './../../styles';

const Item = ({category, subCategory, selectedCategory, selectCategory}) => {
  const selectd = selectedCategory == subCategory.id;
  const _selectCategory = () => selectCategory(category.id, subCategory.id);
  return (
    <Button
      style={selectd ? styles.shareProfItemsActive : styles.shareProfItems}
      onPress={_selectCategory}>
      <Text style={selectd ? styles.shareProfTagActive : styles.shareProfTag}>
        {subCategory.name}
      </Text>
    </Button>
  );
};

export default Item;
