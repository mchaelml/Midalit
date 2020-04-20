import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  eq,
  sub,
  interpolate,
  block,
  useCode,
  cond,
  set,
  Value,
  add,
} from 'react-native-reanimated';
import {withTimingTransition, withTransition, delay} from 'react-native-redash';
import {ICON_SIZE, PADDING, Colors, DURATION} from './icons/Constants';

interface WaveProps {
  active: Animated.Node<number>;
  index: number;
  number: number;
}

const size = ICON_SIZE + PADDING * 2;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderColor: Colors.primary,
    borderWidth: 4,
  },
});

export default ({active, index, number}: WaveProps) => {
  const isActive = eq(active, index);
  console.log(isActive);
  const show = new Value(0);
  const activeTransition = withTransition(show);
  const opacity = interpolate(activeTransition, {
    inputRange: [0, 0.9, 1],
    outputRange: [0, 1, 0],
  });
  //const opacity = sub(1,activeTransition);
  const scale = interpolate(activeTransition, {
    inputRange: [0,0.5,1],
    outputRange: [1,0.6,0],
  });

  useCode(
    () =>
      block([cond(eq(isActive, 1), set(show, 1)), delay(set(show, 0), 100)]),
    [],
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wave, {opacity, transform: [{scale}]}]} />
    </View>
  );
};
