import React from 'react';
import {Image, Text, View} from 'react-native';

import {Button} from '@src/component/Form';
import {navigate} from '@src/navigation';
import LinearGradient from 'react-native-linear-gradient';
import styles from './../styles'

const Item = ({ item, openView }) => {
  const onPress = () => navigate('PlayMovieView', {id: item.id});
  return (
    <Button style={styles.item} onPress={onPress}>
      <Image
        source={{uri: 'https://image.tmdb.org/t/p/w300'+item.poster_path}}
        style={styles.itemImg}
        resizeMode='cover'
      />
      <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']} style={styles.itemOverlay} />
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.original_title}</Text>
      </View>
    </Button>
  );
}

export default Item
