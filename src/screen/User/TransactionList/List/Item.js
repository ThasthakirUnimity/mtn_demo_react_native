import React from 'react';
import { View } from 'react-native';

import { Text } from '@src/component/Basic';
import { Button } from '@src/component/Form';
import { __ } from '@src/utility/translation';
import dateUtil from '@src/utility/date';
import styles from './../styles';

const Item = ({ item, openView }) => {
  const _openView = () => openView(item)
  return (
    <Button style={styles.topupContent} onPress={_openView}>
      <View style={styles.planContent}>
        <View>
          <View style={styles.planRow}>
            <Text style={styles.title} />
            <Text style={styles.price}>
              {item.currency} {item.amount}
            </Text>
          </View>
          <View style={styles.planRow}>
            <Text style={styles.dataPack}>
              {item.currency} {__('Data Pack')}
            </Text>
            <Text style={styles.successText}>{__('Successful')}</Text>
          </View>
          <Text style={styles.date}>
            {dateUtil.formatFull(item.transactionDate)}
          </Text>
        </View>
        <View style={styles.planRow}>
          <Text style={styles.payMode}>{__('Payment Mode')}</Text>
          <Text style={styles.upiText}>{item.payMode}</Text>
        </View>
        <View style={styles.planRow}>
          <Text style={styles.dataPack}>{__('Reference Number')}</Text>
          <Text style={styles.dataPack}>{item.transactionRefNo}</Text>
        </View>
      </View>
    </Button>
  );
};

export default Item;
