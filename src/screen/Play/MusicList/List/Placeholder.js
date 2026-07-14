import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import {
  Placeholder as PlaceholderView,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import styles from '../styles';

const Placeholder = () => {
  const [list] = useState([1, 2, 3, 4]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <PlaceholderView>
        <PlaceholderMedia style={styles.itemImg} />
      </PlaceholderView>
    </View>
  );

  return <FlatList data={list} numColumns={2} renderItem={renderItem} keyExtractor={r => r} />;
};

export default Placeholder;
