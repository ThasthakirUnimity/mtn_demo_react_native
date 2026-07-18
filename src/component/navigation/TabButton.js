import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

import { COLOR } from '@src/theme/typography';

const INACTIVE_COLOR = '#9EA3AE';
export const TAB_ICON_SIZE = 26;

// Pill dimensions
const PILL_HEIGHT = 40;
const PILL_MIN_WIDTH = 40;

/**
 * TabButton — single tab item with an animated pill background.
 *
 * Active state: primary-colour pill + white icon.
 * Inactive state: no background + gray icon.
 *
 * @param {boolean}  isFocused
 * @param {function} onPress
 * @param {function} onLongPress
 * @param {string}   label         — accessibility label
 * @param {function} renderIcon    — (color: string, size: number) => ReactNode
 */
const TabButton = ({ isFocused, onPress, onLongPress, label, renderIcon }) => {
  const progress = useSharedValue(isFocused ? 1 : 0);
   const dotOpacity = useSharedValue(0);
    const scale = useSharedValue(1);
  
  const dotTranslateY = useSharedValue(5);

  useEffect(() => {
     scale.value = withSpring(isFocused ? 1.18 : 1, {
      damping: 14,
      stiffness: 200,
    });
    dotOpacity.value = withTiming(isFocused ? 1 : 0, { duration: 220 });
    dotTranslateY.value = withTiming(isFocused ? 0 : 5, { duration: 220 });
  }, [isFocused]);

  // Pill background: fade in/out + slight scale
  const pillStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      { scale: interpolate(progress.value, [0, 1], [0.7, 1]) },
    ],
  }));

  // Icon: scale up slightly when active
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: withSpring(isFocused ? 1.08 : 1, { damping: 14, stiffness: 200 }) },
    ],
  }));
    const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
      }));
  const dotAnimatedStyle = useAnimatedStyle(() => ({
    opacity: dotOpacity.value,
    transform: [{ translateY: dotTranslateY.value }],
  }));
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={label}
      style={styles.container}
    >
      {/* Animated pill background */}
      <Animated.View style={iconAnimatedStyle} />

      
        {renderIcon(
          isFocused ? COLOR.PRIMARY : INACTIVE_COLOR,
          TAB_ICON_SIZE,
        )}
     
      <Animated.View style={[styles.dot, dotAnimatedStyle, { backgroundColor: COLOR.PRIMARY }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    
  },
    dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginTop: 5,
    color: COLOR.PRIMARY,
    },
  pill: {
    position: 'absolute',
    width: PILL_MIN_WIDTH,
    height: PILL_HEIGHT,
    borderRadius: PILL_HEIGHT / 2,
    // backgroundColor: PRIMARY,
  },
  iconWrapper: {
    width: PILL_MIN_WIDTH,
    height: PILL_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabButton;

