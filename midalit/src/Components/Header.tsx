import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Text } from "../Theme";

import RoundedIconButton from "./RoundedIconButton";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  dark: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      paddingHorizontal="m"
    >
      <RoundedIconButton
        name={left.icon}
        {...{ color, backgroundColor }}
        onPress={left.onPress}
        size={44}
        iconRatio={0.4}
      />
      <Text {...{ color }} variant="header">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        {...{ color, backgroundColor }}
        onPress={right.onPress}
        size={44}
        iconRatio={0.4}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
