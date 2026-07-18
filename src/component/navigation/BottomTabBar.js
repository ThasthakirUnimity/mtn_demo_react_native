import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { navigate } from '@src/navigation';
import TabButton, { TAB_ICON_SIZE } from './TabButton';
import CenterFab, { FAB_SIZE } from './CenterFab';
import { COLOR } from '@src/theme/typography';

// ─── Layout constants ─────────────────────────────────────────────────────────
const BAR_HEIGHT = 80;
const BAR_RADIUS = 45;
const BAR_MARGIN_H = 22;
const BAR_MARGIN_BOTTOM = 16;

// ─────────────────────────────────────────────────────────────────────────────

/**
 * Maps a screen name to its tab index (0-3).
 * Add extra screens that should keep a tab highlighted (e.g. detail screens).
 */
const SCREEN_TO_TAB_INDEX = {
  // Home (0)
  PublicHome: 0,
  // Shop (1)
  ShopHome: 1,
  ShopList: 1,
  ShopView: 1,
  ShopCart: 1,
  // Play (2)
  PlayHome: 2,
  PlayChannelList: 2,
  PlayMovieList: 2,
  PlayMusicList: 2,
  PlayGameList: 2,
  // Menu (3)
  UserHome: 3,
};

/**
 * Tab definitions — matching the original Footer exactly.
 * renderIcon: (focused: boolean, color: string, size: number) => ReactNode
 */
const TABS = [
  {
    key: 'home',
    screen: 'PublicHome',
    label: 'Home',
    renderIcon: (focused, color, size) => (
      <Foundation name="home" size={size} color={color} />
    ),
  },
  {
    key: 'shop',
    screen: 'ShopHome',
    label: 'Shop',
    renderIcon: (focused, color, size) => (
      <SimpleLineIcons name="handbag" size={size} color={color} />
    ),
  },
  // Center FAB slot — no screen, no icon; CenterFab renders above this gap
  { key: 'fab', isFab: true },
  {
    key: 'play',
    screen: 'PlayHome',
    label: 'Play',
    renderIcon: (focused, color, size) => (
      <Ionicons
        name={focused ? 'play-circle' : 'play-circle-outline'}
        size={size}
        color={color}
      />
    ),
  },
  {
    key: 'menu',
    screen: 'UserHome',
    label: 'Menu',
    renderIcon: (focused, color, size) => (
      <SimpleLineIcons name="grid" size={size} color={color} />
    ),
  },
];

/**
 * BottomTabBar — standalone floating 4-tab bar.
 *
 * Drop-in replacement for the old <Footer> component.
 * Uses the new floating pill design with animated active dot + scale.
 *
 * @param {string}   currentScreen — active route name, highlights the matching tab
 * @param {function} [onTabPress]  — optional callback(screenName) before navigation
 */
const BottomTabBar = ({ currentScreen, onTabPress }) => {
  const insets = useSafeAreaInsets();
  const activeIndex = SCREEN_TO_TAB_INDEX[currentScreen] ?? -1;

  const handlePress = (screen, isFocused) => {
    if (onTabPress) onTabPress(screen);
    if (!isFocused) navigate(screen);
  };

  return (
    <View
      pointerEvents="box-none"
      style={[styles.outerWrapper, { bottom: insets.bottom + BAR_MARGIN_BOTTOM }]}
    >
      <View style={styles.bar}>
        {TABS.map((tab, index) => {
          if (tab.isFab) {
            // Empty spacer so the 4 real tabs sit 2 left / 2 right of the FAB
            return <View key="fab-slot" style={styles.fabSlot} />;
          }
          const isFocused = activeIndex === index;
          return (
            <TabButton
              key={tab.key}
              isFocused={isFocused}
              label={tab.label}
              renderIcon={(color, size) => tab.renderIcon(isFocused, color, size)}
              onPress={() => handlePress(tab.screen, isFocused)}
              onLongPress={() => handlePress(tab.screen, isFocused)}
            />
          );
        })}
      </View>

      {/* CenterFab — floats above the center of the bar */}
      <View pointerEvents="box-none" style={styles.fabOverlay}>
        <CenterFab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerWrapper: {
    position: 'absolute',
    left: BAR_MARGIN_H,
    right: BAR_MARGIN_H,
    zIndex: 999,  // Keep below SupportChat (typically ~1000)
  },
  bar: {
    height: BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.LIGHT,
    borderRadius: BAR_RADIUS,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.10,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  fabSlot: {
    width: FAB_SIZE,
  },
  fabOverlay: {
    position: 'absolute',
    // top: FAB_OVERLAY_TOP,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export { BAR_HEIGHT, BAR_MARGIN_H, BAR_MARGIN_BOTTOM };
export default BottomTabBar;
