import React, { useState } from "react";
import { useTransition } from "react-native-redash";
import { interpolate, sub } from "react-native-reanimated";

import { Box } from "../../Theme";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";

import Background from "./Background";
import Card from "./Card";
import Categories from "./Categories";

interface OutfitIdeasProps {}

const cards = [
  {
    index: 2,
    source: require("../../../assets/1.png"),
  },
  {
    index: 1,
    source: require("../../../assets/2.png"),
  },
  {
    index: 0,
    source: require("../../../assets/3.png"),
  },
];

const step = 1 / (cards.length - 1); // 0.5

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutiftIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="outfit ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />

      <Categories />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                {...{ source, step }}
              />
            ),
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
