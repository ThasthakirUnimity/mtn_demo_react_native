import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomBottomTab, { BAR_HEIGHT } from '@src/component/navigation/CustomBottomTab';

// ─── Tab screens ─────────────────────────────────────────────────────────────
// Replace placeholder screens below with your real screen components.
const HomeScreen     = require('@src/screen/Public/Home').default;
const OffersScreen   = require('@src/screen/Public/Offers').default;
const SupportScreen  = require('@src/screen/Public/HelpCentre').default;

// Lightweight placeholders — swap for real screens when ready.
const SpeedScreen = () => (
  <View style={placeholderStyles.container}>
    <Text style={placeholderStyles.text}>Speed Test</Text>
  </View>
);

const TransferScreen = () => (
  <View style={placeholderStyles.container}>
    <Text style={placeholderStyles.text}>Transfer</Text>
  </View>
);
// ─────────────────────────────────────────────────────────────────────────────

const Tab = createBottomTabNavigator();

/**
 * The bottom margin of the floating bar + bar height + safe area padding.
 * Use this constant to add paddingBottom on screens that need to avoid
 * being hidden behind the tab bar.
 */
export const TAB_BOTTOM_OFFSET = BAR_HEIGHT + 36 + 20; // bar + margin + extra

const renderTabBar = (props) => <CustomBottomTab {...props} />;

const BottomTabNavigator = () => (
  <Tab.Navigator
    tabBar={renderTabBar}
    screenOptions={{
      headerShown: false,
      // Give every screen enough bottom padding so content isn't hidden
      // behind the floating bar. Override per-screen via screenOptions.
    }}
    sceneContainerStyle={styles.sceneContainer}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeScreen}
      options={{
        title: 'Home',
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="SpeedTab"
      component={SpeedScreen}
      options={{
        title: 'Speed',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="speedometer"
            size={size}
            color={color}
          />
        ),
      }}
    />

    {/*
     * TransferTab — center FAB.
     * The icon is rendered by CenterFab directly (always white on purple).
     * The tabBarIcon here is unused in practice but keeps the API consistent.
     */}
    <Tab.Screen
      name="TransferTab"
      component={TransferScreen}
      options={{
        title: 'Transfer',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="swap-horizontal-bold"
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="OffersTab"
      component={OffersScreen}
      options={{
        title: 'Offers',
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={focused ? 'tag' : 'tag-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="SupportTab"
      component={SupportScreen}
      options={{
        title: 'Support',
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'help-circle' : 'help-circle-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: TAB_BOTTOM_OFFSET,
  },
});

const placeholderStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    color: '#4C4D4F',
    fontWeight: '600',
  },
});

export default BottomTabNavigator;
