import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Box, Text } from "../../Theme";

import BorderlessTap from "./BorderlessTap";

interface Props {
  category: {
    id: string;
    color: string;
    title: string;
  };
}

const SIZE = 60;
const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

const Category = ({ category: { color: backgroundColor, title } }: Props) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" marginTop="m" alignItems="center">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: backgroundColor,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor,
            }}
          />
        </Box>
        <Text marginTop="s" textAlign="center">
          {title}
        </Text>
      </Box>
    </BorderlessTap>
  );
};

export default Category;
