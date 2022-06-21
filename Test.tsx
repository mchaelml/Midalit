import React, { useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  Button,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { onScrollEvent, useValue, useScrollHandler } from "react-native-redash";
import Animated, {
  Extrapolate,
  interpolate,
  multiply,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

import { Box, useTheme } from "./midalit/src/Theme";

interface Props {}
const slides: any[] = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don’t worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("./midalit/assets/1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Playful",
    subtitle: "Your Style, Your Way",
    description:
      " Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: {
      src: require("./midalit/assets/2.png"),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: "Excentric",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src: require("./midalit/assets/3.png"),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src: require("./midalit/assets/4.png"),
      width: 1757,
      height: 2551,
    },
  },
];

const Test = () => {
  const { scrollHandler, x } = useScrollHandler();
  const theme = useTheme();
  const scroll = useRef<Animated.ScrollView>(null);
  return (
    <Box backgroundColor="lightBlue" flex={1}>
      <Box flex={0.7} alignItems="center" justifyContent="center">
        {slides.map(({ picture }, _i) => {
          const opacity = interpolate(x, {
            inputRange: [width * (_i - 1), width * _i, width * (_i + 1)],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  overflow: "hidden",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  opacity,
                },
              ]}
              key={`${picture.src}+${_i}`}
            >
              <Image
                source={picture.src}
                style={{
                  width: width,
                  height: (width * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          {...scrollHandler}
          ref={scroll}
          snapToInterval={width}
          horizontal
          decelerationRate="fast"
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
        >
          {slides.map((s, i) => (
            <Box
              key={`${s.title}+${i}`}
              alignItems="center"
              justifyContent="center"
              alignContent="center"
              flexDirection="column"
              width={width}
            >
              <Text>{s.title}</Text>
            </Box>
          ))}
        </Animated.ScrollView>
      </Box>
      <Box padding="m" flex={0.3} backgroundColor="white">
        <Animated.View
          style={{
            width: width * slides.length,
            flexDirection: "row",
            flex: 1,
            transform: [{ translateX: multiply(x, -1) }],
          }}
        >
          {slides.map((s, i) => (
            <Box
              key={i}
              width={width}
              justifyContent="center"
              alignItems="center"
            >
              <Text>{s.subtitle}</Text>
              <Button
                onPress={() =>
                  scroll?.current
                    ?.getNode()
                    .scrollTo({ x: width * (i + 1), animated: true })
                }
                title="Next"
              />
            </Box>
          ))}
        </Animated.View>
      </Box>
    </Box>
  );
};

export default Test;
