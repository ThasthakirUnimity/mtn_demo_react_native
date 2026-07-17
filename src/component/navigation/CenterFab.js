import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PRIMARY_PURPLE = '#6C2EB9';
export const FAB_SIZE = 66;
const ICON_SIZE = 28;

/**
 * CenterFab — the elevated circular button in the center of the tab bar.
 *
 * @param {boolean}  isFocused
 * @param {function} onPress
 * @param {function} onLongPress
 */
const CenterFab = ({ isFocused, onPress, onLongPress }) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 0.92 : 1, {
      damping: 14,
      stiffness: 180,
    });
  }, [isFocused]);

  const fabAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.82}
      accessibilityRole="button"
      accessibilityLabel="Transfer"
      style={styles.touchable}
    >
      <Animated.View style={[styles.fab, fabAnimatedStyle]}>
        <MaterialCommunityIcons
          name="swap-horizontal-bold"
          size={ICON_SIZE}
          color="#FFFFFF"
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    backgroundColor: PRIMARY_PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: PRIMARY_PURPLE,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.55,
        shadowRadius: 14,
      },
      android: {
        elevation: 14,
      },
    }),
  },
});

export default CenterFab;
