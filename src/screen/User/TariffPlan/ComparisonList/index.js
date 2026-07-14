import React from 'react';
import {FlatList, View} from 'react-native';

import {__} from '@src/utility/translation';
import styles from './../styles';
import Item from './Item';

const ComparisonList = props => {
  const renderItem = ({item}) => (
    <Item item={item} activatePlan={props.activatePlan} />
  );

  return (
    <View style={styles.leaderboard}>
      <FlatList
        data={props.list}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ComparisonList;
