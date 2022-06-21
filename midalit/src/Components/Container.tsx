import React, { ReactNode } from "react";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Box, useTheme } from "../Theme";

import pattern1 from "./assets/patterns/1.png";
import pattern2 from "./assets/patterns/2.png";
import pattern3 from "./assets/patterns/3.png";

export const patters = [pattern1, pattern2, pattern3];
const aspectRation = 750 / 1125;
const { width, height: wHeight } = Dimensions.get("window");
const height = width * aspectRation;

interface ContainerProps {
  children: ReactNode;
  footer: () => void;
  pattern: 0 | 1 | 2;
}

const Container: React.FC<ContainerProps> = ({
  children,
  footer,
  pattern = 0,
}) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = patters[pattern];
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight} backgroundColor="secondary">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            flex={1}
            justifyContent="center"
            padding="xl"
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingTop="m">
          {footer()}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
