import React from "react";
import { Dimensions, Image } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { Box, Text, useTheme } from "../../Theme";
import Header from "../../Components/Header";

import pattern from "./assets/drawer.png";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");

export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutiftIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorite Outfits",
    screen: "FavoriteOutfits",
    color: "drawer1",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "FavoriteOutfits",
    color: "drawer2",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "drawer3",
  },
  {
    icon: "settings",
    label: "Notifications Settings",
    screen: "FavoriteOutfits",
    color: "drawer4",
  },
  {
    icon: "log-out",
    label: "Logout",
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        }),
      ),
    color: "secondary",
  },
];

const Drawer = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          backgroundColor="secondary"
          borderBottomRightRadius="xl"
        >
          <Header
            title="my profile"
            dark
            left={{ icon: "x", onPress: () => navigation.closeDrawer() }}
            right={{ icon: "shopping-bag", onPress: () => true }}
          />
        </Box>
      </Box>
      <Box flex={0.7}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            left={DRAWER_WIDTH / 2 - 50}
            top={-50}
            backgroundColor="primary"
            style={{ borderRadius: 50 }}
            alignSelf="center"
            width={100}
            height={100}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Mike Peters
            </Text>
            <Text textAlign="center">mike@flex.com</Text>
          </Box>
          {items.map((item: DrawerItemProps) => (
            <DrawerItem {...item} key={item.label} />
          ))}
        </Box>
      </Box>
      <Box flex={0.11} backgroundColor="white" width={DRAWER_WIDTH}>
        <Image
          source={pattern}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
