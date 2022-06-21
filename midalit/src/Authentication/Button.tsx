import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { Text } from "./index";
import { useTheme } from "../Theme";

interface ContainerProps {
  backgroundColor: string;
  //onPress: () => void;
}

const Container = styled(RectButton)<ContainerProps>`
  background-color: ${(prop) => prop.backgroundColor};
  border-radius: 25;
  height: 50px;
  width: 245px;
  align-items: center;
  justify-content: center;
  margin-top: ${(prop) => (prop.noMarginTop ? 0 : "50px")};
`;

// const Title = styled(Text)`
//   color: ${props => props.color};
// `;

interface Props {
  variant: "default" | "primary" | "transparent";
  title?: string;
  onPress: () => void;
  children?: ReactNode;
  noMarginTop?: boolean;
}

const Button = ({ title, variant, onPress, children, noMarginTop }: Props) => {
  const theme = useTheme();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;
  return (
    <Container {...{ backgroundColor, onPress, noMarginTop }}>
      {children ? (
        children
      ) : (
        <Text style={{ color }} variant="button">
          {title}
        </Text>
      )}
    </Container>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
