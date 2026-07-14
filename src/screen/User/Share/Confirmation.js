import React from 'react';
import {View, ScrollView } from 'react-native';
import Modal from 'react-native-modalbox';

import {Text} from '@src/component/Basic';
import {Button, TextInput} from '@src/component/Form';
import {__} from '@src/utility/translation';
import styles from './styles';

const Confirmation = ({
  shareType,
  selectedPlan,
  selectedNumber,
  toProfile,
  recentlySharedSelected,
  message,
  onChangeMessage,
  submitConfirmation,
  onClosed,
}) => {
  const plan = {};
  const fromUser = {};
  const toUser = {};
  if (recentlySharedSelected) {
    plan.label = recentlySharedSelected.shared;
    fromUser.initial = recentlySharedSelected.senderName.substring(0, 1);
    fromUser.name = recentlySharedSelected.senderName;
    fromUser.number = recentlySharedSelected.senderNumber;
    toUser.initial = recentlySharedSelected.receivername.substring(0, 1);
    toUser.name = recentlySharedSelected.receivername;
    toUser.number = recentlySharedSelected.recieverNumber;
  } else {
    plan.label = selectedPlan.label.toUpperCase();
    fromUser.initial = selectedNumber.name.substring(0, 1);
    fromUser.name = selectedNumber.name;
    fromUser.number = selectedNumber.number;
    toUser.initial = toProfile.nick_name.substring(0, 1);
    toUser.name = toProfile.nick_name;
    toUser.number = toProfile.mobilenumber;
  }
  return (
    <Modal
      isOpen
      position="bottom"
      swipeDirection="down"
      style={styles.modalConfirm}
      onClosed={onClosed}>
      <ScrollView>
        <View style={styles.confirmHeader}>
          <View style={styles.confirmHeaderRow}>
            <Text style={styles.confirmHeaderTitle}>
              {__('Sharing')} {plan.label} {__('of your data')}
            </Text>
          </View>
          <View style={styles.confirmHeaderRow}>
            <Text style={styles.confirmHeaderSubTitle}>
              {__('Review details')}
            </Text>
          </View>
        </View>

        <View style={styles.confirm}>
          <View style={styles.confirmLabel}>
            <Text style={styles.confirmLabelTitle}>{__('From')}</Text>
          </View>
          <View style={styles.confirmItems}>
            <View style={styles.confirmItem}>
              <View style={styles.confirmInitial}>
                <Text style={styles.confirmInitialText}>
                  {fromUser.initial}
                </Text>
              </View>
              <View style={styles.confirmContent}>
                <View style={styles.confirmRow}>
                  <View style={styles.confirmCol}>
                    <View style={styles.confirmRow}>
                      <Text style={styles.confirmName}>{fromUser.name}</Text>
                    </View>
                    <View style={styles.confirmRow}>
                      <Text style={styles.confirmNo}>{fromUser.number}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.confirmLabel}>
            <Text style={styles.confirmLabelTitle}>{__('To')}</Text>
          </View>
          <View style={styles.confirmItems}>
            <View style={styles.confirmItem}>
              <View style={styles.confirmInitial}>
                <Text style={styles.confirmInitialText}>{toUser.initial}</Text>
              </View>
              <View style={styles.confirmContent}>
                <View style={styles.confirmRow}>
                  <View style={styles.confirmCol}>
                    <View style={styles.confirmRow}>
                      <Text style={styles.confirmName}>{toUser.name}</Text>
                    </View>
                    <View style={styles.confirmRow}>
                      <Text style={styles.confirmNo}>{toUser.number}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.confirmLabel}>
            <Text style={styles.confirmLabelTitle}>
              {__('Message (Optional)')}
            </Text>
          </View>
          <View style={styles.confirmGroup}>
            <TextInput
              maxLength={150}
              placeholder=""
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              numberOfLines={6}
              value={message}
              onChangeText={onChangeMessage}
              style={styles.confirmInput}
              multiline
            />
            <View style={styles.confirmRow}>
              <Text style={styles.confirmNote}>{__('Max 150 characters')}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.confirmFooter}>
        <Button style={styles.confirmBtn} onPress={submitConfirmation}>
          <Text style={styles.confirmBtnText}>{__('Confirm')}</Text>
        </Button>
      </View>
    </Modal>
  );
};

export default Confirmation;
