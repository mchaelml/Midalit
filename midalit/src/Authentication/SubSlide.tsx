import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

import Button from "./Button";

const { width } = Dimensions.get("window");

const Container = styled.View`
  justify-content: center;
  width: ${width};
  align-items: center;
  padding: 44px;
`;

const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #0c0f34;
  text-align: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #0c0f34;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 30px;
`;

interface Props {
  title: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ title, description, last, onPress }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button
        title={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </Container>
  );
};

export default SubSlide;
