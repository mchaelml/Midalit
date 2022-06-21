import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text, useTheme } from "../../Theme";
import Button from "../Button";
import { AuthNavigationProps } from "../../Components/Navigation";

const { width } = Dimensions.get("window");

const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074,
};

const Picture = styled.Image`
  width: ${(props) => width - props.theme.borderRadii.xl};
  height: ${(prop) =>
    ((width - prop.theme.borderRadii.xl) * prop.picture.height) /
    prop.picture.width};
`;

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Picture source={picture.src} {...{ picture, theme }} />
      </Box>
      <Box flex={1} borderBottomRightRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          flex={1}
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            title="Have an account? Sign in"
            onPress={() => navigation.navigate("Login")}
          />
          <Button title="Join us, it's free" onPress={() => null} />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text>Forgot password?</Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
