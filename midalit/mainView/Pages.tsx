// @flow
import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

import { Section, SMALL_HEADER_HEIGHT } from './Constants';
import MockEntry from './MockEntry';
import MockCard from './MockCard';


const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  page: {
    backgroundColor: 'white',
    width,
    height: height - SMALL_HEADER_HEIGHT,
  },
});


interface PagesProps {
  sections: Section[];
  x: Animated.Value<number>;
  y: Animated.Value<number>
};

const { multiply } = Animated;
export default ({sections, y, x}: PagesProps) => {
    const translateX = multiply(x, -1);
    const translateY = multiply(y, -1);
    return (
      <View style={styles.container}>
        {
        sections.map(({ image }, key) => (
          <Animated.View style={[styles.page, { transform: [{ translateX }, { translateY }] }]} {...{ key }}>
            <MockEntry {...{ image }} />
            <MockCard {...{ image }} />
            <MockEntry {...{ image }} />
            <MockEntry {...{ image }} />
            <MockEntry {...{ image }} />
            <MockEntry {...{ image }} />
          </Animated.View>
        ))
      }
      </View>
    );
}
