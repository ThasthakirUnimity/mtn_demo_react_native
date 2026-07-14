import { COLOR } from '@src/theme/typography';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import styles from '../styles';

import Item from './Item';
import Placeholder from './Placeholder';

const List = props => {
  const renderItem = ({ item }) => <Item item={item} />;

  const renderFooter = () => {
    if (props.fetchingMore) {
      return (
        <View style={{ height: 30, borderWidth: 1, borderColor: 'red' }}>
          <ActivityIndicator animating={true} size={'large'} />
        </View>
      );
    }
    return <View style={{ height: 30 }} />;
  };

  if (props.fetchingInitial) {
    return <Placeholder />;
  }

  return (
    <View style={styles.itemMain}>
      <FlatList
        data={props.list}
        numColumns={2}
        onEndReached={props.onEndReached}
        renderItem={renderItem}
        keyExtractor={r => r.id}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ marginVertical: 10 }}
      />
    </View>
  );
};

export default List;
