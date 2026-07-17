import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import TabButton, { TAB_ICON_SIZE } from './TabButton';
import CenterFab, { FAB_SIZE } from './CenterFab';

// ─── Layout constants ────────────────────────────────────────────────────────
export const BAR_HEIGHT = 80;
const BAR_RADIUS = 45;
const BAR_MARGIN_H = 22;
const BAR_MARGIN_BOTTOM = 16;

// How far the FAB center sits above the bar's top edge.
// FAB center = BAR top - FAB_LIFT_ABOVE → FAB overlaps the bar from above.
const FAB_LIFT_ABOVE = 20;
// Position of fabOverlay's top edge relative to bar top:
// fabOverlay.top = -(FAB_SIZE/2 + FAB_LIFT_ABOVE) = -(33 + 20) = -53
const FAB_OVERLAY_TOP = -(FAB_SIZE / 2 + FAB_LIFT_ABOVE);
// ─────────────────────────────────────────────────────────────────────────────

/**
 * CustomBottomTab
 *
 * Floating pill-shaped tab bar with a center FAB that lifts above the bar.
 * Pass as the `tabBar` prop to `createBottomTabNavigator`.
 *
 * Expects exactly 5 tabs; index 2 is always rendered as the CenterFab.
 */
const CustomBottomTab = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  const handlePress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const handleLongPress = (route) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const centerRoute = state.routes[2];
  const centerFocused = state.index === 2;

  return (
    <View
      // The outerWrapper has no background; only bar + fab get backgrounds.
      // pointerEvents="box-none" lets touches pass through transparent area.
      pointerEvents="box-none"
      style={[
        styles.outerWrapper,
        { bottom: insets.bottom + BAR_MARGIN_BOTTOM },
      ]}
    >
      {/* ── Floating white pill bar ─────────────────────────────────────── */}
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          // Index 2 = center FAB slot (rendered in the overlay below)
          if (index === 2) {
            return <View key={route.key} style={styles.fabSlot} />;
          }

          const label =
            typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : options.title ?? route.name;

          const renderIcon = (color, size) =>
            options.tabBarIcon
              ? options.tabBarIcon({ focused: isFocused, color, size })
              : null;

          return (
            <TabButton
              key={route.key}
              isFocused={isFocused}
              label={label}
              renderIcon={renderIcon}
              onPress={() => handlePress(route, isFocused)}
              onLongPress={() => handleLongPress(route)}
            />
          );
        })}
      </View>

      {/* ── CenterFab — absolutely positioned above the bar ─────────────── */}
      {centerRoute && (
        <View
          pointerEvents="box-none"
          style={styles.fabOverlay}
        >
          <CenterFab
            isFocused={centerFocused}
            onPress={() => handlePress(centerRoute, centerFocused)}
            onLongPress={() => handleLongPress(centerRoute)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outerWrapper: {
    position: 'absolute',
    left: BAR_MARGIN_H,
    right: BAR_MARGIN_H,
  },
  bar: {
    height: BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
  // Empty flex slot in the row where the FAB sits visually
  fabSlot: {
    flex: 1,
  },
  // Transparent overlay centered above the bar
  fabOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: FAB_OVERLAY_TOP,
    alignItems: 'center',
  },
});

export default CustomBottomTab;
