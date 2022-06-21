import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { Box, Text, Theme, useTheme } from "../../Theme";
import RoundedIcon from "../../Components/RoundedIcon";
import { HomeRoutes } from "../../Components/Navigation";

interface BaseDrawerItem {
  icon: string;
  color: keyof Theme["colors"];
  label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, color, label, ...props }: DrawerItemProps) => {
  const theme = useTheme();
  const navigation = useNavigation<
    DrawerNavigationProp<HomeRoutes, "OutiftIdeas">
  >();

  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() =>
        "screen" in props
          ? navigation.navigate(props.screen)
          : props.onPress(navigation)
      }
    >
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={40}
          backgroundColor={color}
          color="white"
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
