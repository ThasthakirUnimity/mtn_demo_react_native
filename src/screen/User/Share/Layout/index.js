import React from 'react'
import { Image, ScrollView, View } from 'react-native'

import { Text } from '@src/component/Basic'
import { Button, TextInput } from '@src/component/Form'
import { __ } from '@src/utility/translation'

import styles from './../styles'
import List from './List'
import RecentlyShared from './RecentlyShared'
import Notes from './Notes'

const Layout = ({ shareType, plans, selectedPlan, selectedNumber, toMobileNumber, toProfile, recentlyShared, repeatRecentlyShared, selectPlan, onChangeToMobileNumber, openContacts, fetchProfile }) => {
  return (
    <>
      <View style={styles.share}>
        <View style={styles.shareHeader}>
          <Text style={styles.shareHeaderTitle}>{__(shareType.title)}</Text>
        </View>
        <View style={styles.shareData}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <List plans={plans} selectedPlan={selectedPlan} select={selectPlan} />
          </ScrollView>
        </View>
        <Notes />
      </View>

      <View style={styles.form}>
        <View style={styles.formRow}>
          <View style={styles.formLabel}>
            <Text style={styles.formLabelText}>{__('From')}</Text>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.formCol}>
              <TextInput
                placeholder={__('Your number or linked numbers appears')}
                placeholderTextColor='rgba(0, 0, 0, 0.3)'
                style={styles.formInput}
                value={selectedNumber ? (selectedNumber.name + ' (' + selectedNumber.number + ')') : ''}
              />
            </View>
          </View>
        </View>
        <View style={styles.formRow}>
          <View style={styles.formLabel}>
            <Text style={styles.formLabelText}>{__('To')}</Text>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.formCol}>
              {
                                toProfile
                                  ? <TextInput
                                      editable={false}
                                      keyboardType='phone-pad'
                                      placeholder={__('Phone Number')}
                                      placeholderTextColor='rgba(0, 0, 0, 0.3)'
                                      style={styles.formInput}
                                      value={toProfile ? (toProfile.nick_name + ' (' + toProfile.mobilenumber + ')') : ''}
                                    />
                                  : <TextInput
                                      keyboardType='phone-pad'
                                      maxLength={10}
                                      placeholder={__('Phone Number')}
                                      placeholderTextColor='rgba(0, 0, 0, 0.3)'
                                      style={styles.formInput}
                                      value={toMobileNumber}
                                      onChangeText={onChangeToMobileNumber}
                                      onSubmitEditing={fetchProfile}
                                    />
                            }
            </View>
            <Button onPress={openContacts}>
              <Image source={require('@asset/icons/addressbook.png')} resizeMode='contain' />
            </Button>
          </View>
        </View>
      </View>

      <RecentlyShared recentlyShared={recentlyShared} repeatRecentlyShared={repeatRecentlyShared} />
    </>
  )
}

export default Layout
