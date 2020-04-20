import React, {ReactElement, cloneElement} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Animated, {
  cond,
  eq,
  greaterThan,
  interpolate,
  multiply,
  not,
  divide,
} from 'react-native-reanimated';
import {withTransition} from 'react-native-redash';
import {DURATION, ICON_SIZE} from './icons/Constants';

interface TabProps {
  children: ReactElement;
  onPress: () => void;
  active: Animated.Node<number>;
  index: number;
  transition: Animated.Node<number>;
  number: number;
}

const styles = StyleSheet.create({
  icon: {
    overflow: 'hidden',
  },
});

export default ({
  children,
  transition,
  active,
  index,
  onPress,
  number,
}: TabProps) => {
  const isActive = eq(active, index);
  const activeTransition = withTransition(isActive, {duration: DURATION});
  const width = interpolate(activeTransition, {
    inputRange: [0, 1],
    outputRange: [0, ICON_SIZE],
  });
  //const width = cond(eq(isActive,1), ICON_SIZE, 0);
  const isGoingLeft = greaterThan(transition, active);
  const direction = cond(
    isActive,
    cond(isGoingLeft, 'rtl', 'ltr'),
    cond(isGoingLeft, 'ltr', 'rtl'),
  );
  return (
    <TouchableWithoutFeedback {...{onPress}}>
      <Animated.View
        style={{
          //direction,
          width: ICON_SIZE,
          height: ICON_SIZE,
        }}>
        <View style={StyleSheet.absoluteFill}>{children}</View>
        <Animated.View
          style={[
            styles.icon,
            {
              height: width,
            },
          ]}>
          {cloneElement(children, {active: true})}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
