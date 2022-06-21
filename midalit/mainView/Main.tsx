// @flow
import * as React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import Headers from "./Headers";
import Pages from "./Pages";

export const SMALL_HEADER_HEIGHT = 109;
export const MEDIUM_HEADER_HEIGHT = 300;

const { Value, event, block, call } = Animated;
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const onScroll = (contentOffset: any) =>
  event(
    [
      {
        nativeEvent: {
          contentOffset,
        },
      },
    ],
    { useNativeDriver: true },
  );

interface SectionProps {
  sections: any[];
}

export default ({ sections }: SectionProps) => {
  const x = new Value(0);
  const y = new Value(0);
  const onScrollX = onScroll({ x });
  const onScrollY = onScroll({ y });
  const selectHeader = (index: number) => {
    console.log(index);
    y.setValue(0);
    x.setValue(0);
  };
  return (
    <View style={styles.container}>
      <View>
        <Headers {...{ sections, y, x, selectHeader }} />
        <Pages {...{ sections, y, x }} />
      </View>
      <Animated.ScrollView
        style={StyleSheet.absoluteFill}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={onScrollY}
        bounces={false}
        snapToOffsets={[
          height,
          height - MEDIUM_HEADER_HEIGHT,
          height - SMALL_HEADER_HEIGHT,
        ]}
        contentContainerStyle={{
          height: height + height - SMALL_HEADER_HEIGHT,
        }}
      >
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={onScrollX}
          bounces={false}
          contentContainerStyle={{ width: width * sections.length }}
          snapToInterval={width}
          decelerationRate="fast"
          horizontal
        />
      </Animated.ScrollView>
    </View>
  );
};
