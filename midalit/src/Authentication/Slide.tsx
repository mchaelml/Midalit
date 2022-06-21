import React from "react";
import { View, Dimensions, ViewProps } from "react-native";
import styled from "styled-components/native";

import { Text } from "../Theme";

const { width, height } = Dimensions.get("screen");

export const SLIDE_HEIGHT = 0.61 * height;

const Container = styled(View)`
  width: ${width};
`;

interface TitleContainerProps extends ViewProps {
  transform?: number;
  rotate?: string;
}

const TitleContainer = styled.View<TitleContainerProps>`
  justify-content: center;
  height: 100;
`;

const Title = styled(Text)`
  /* font-weight: bold;
  font-size: 80;
  color: white;
  text-align: center;
  line-height: 80; */
`;

interface Props {
  label: string;
  right?: boolean;
}

const Slide = ({ label, right }: Props) => {
  //onst transform = right ? (width / 2) - 50 : (-width / 2) + 50;
  //const rotate = right ? '-90deg' : '90deg';

  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    {
      rotate: right ? "-90deg" : "90deg",
    },
  ];
  return (
    <Container>
      <TitleContainer style={{ transform }}>
        <Title variant="hero">{label}</Title>
      </TitleContainer>
    </Container>
  );
};

export default Slide;
