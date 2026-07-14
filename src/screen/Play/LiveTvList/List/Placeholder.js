import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import styles from '../styles';
import {
  Placeholder as PlaceholderView,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const Placeholder = () => {
  const [list] = useState([1, 2, 3, 4]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <PlaceholderView>
          <PlaceholderMedia style={styles.itemImg} />
      </PlaceholderView>
    </View>
  );

  return <FlatList numColumns={2} data={list} renderItem={renderItem} keyExtractor={r => r} />;
};

export default Placeholder;
