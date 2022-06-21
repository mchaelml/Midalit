import React from "react";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import styled from "styled-components/native";

const DotContainer = styled(Animated.View)`
  background-color: #2cb9b0;
  width: 8;
  height: 8;
  border-radius: 4px;
  margin: 4px;
`;

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  return <DotContainer style={{ transform: [{ scale }], opacity }} />;
};

export default Dot;
