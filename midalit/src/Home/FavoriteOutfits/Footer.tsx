import React from "react";
import { Box } from "../../Theme";
import Button from "../../Authentication/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

interface Props {
  label: string;
  onPress: () => void;
}

const Footer = ({ label, onPress }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <Box backgroundColor="secondary" padding="m" borderTopLeftRadius="xl">
      <Box alignItems="center" style={{ paddingBottom: insets.bottom }}>
        <Button variant="primary" {...{ title: label, onPress }} noMarginTop />
      </Box>
    </Box>
  );
};

export default Footer;
