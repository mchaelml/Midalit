import React, { useState, useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  Transitioning,
  Transition,
  TransitioningView,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

import { HomeNavigationProps } from "../../Components/Navigation";
import Header from "../../Components/Header";
import { Box, useTheme } from "../../Theme";

import Footer from "./Footer";
import Outfit from "./Outfit";
import TopCurve from "./TopCurve";

const { width: wWidth } = Dimensions.get("window");

const defaultOutfits = [
  {
    id: 1,
    color: "#BFEAF5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: "#BFEAF5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: "#F3F0EF",
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: "#D5C3BB",
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: "#DEEFC4",
    aspectRatio: 160 / 145,
    selected: false,
  },
];

interface Props {}

const FavoriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;
  const [footerHeight, setFooterHeight] = useState(0);
  const [outfits, setOutfits] = useState(defaultOutfits);
  const transition = (
    <Transition.Together>
      {/* <Transition.Out type="fade" />
      <Transition.In type="fade" /> */}
      <Transition.Change />
    </Transition.Together>
  );
  const list = useRef<TransitioningView>(null);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Transitioning.View ref={list} transition={transition}>
            <Box flexDirection="row">
              <Box marginRight="m">
                {outfits
                  .filter((_, i) => i % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} {...{ width, outfit }} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter((_, i) => i % 2 === 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} {...{ width, outfit }} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
      </Box>
      <Box
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => setFooterHeight(height)}
      >
        <TopCurve {...{ footerHeight }} />
        <Footer
          label="Add to Favorites"
          onPress={() => {
            list.current?.animateNextTransition();
            setOutfits(outfits.filter((outfit) => !outfit.selected));
          }}
        />
      </Box>
    </Box>
  );
};

export default FavoriteOutfits;
