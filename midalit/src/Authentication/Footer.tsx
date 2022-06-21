import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import { Text, Box } from "../Theme";
import SocialLogin from "../Components/SocialLogin";

interface Props {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: Props) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <BorderlessButton onPress={onPress}>
          <Text variant="button" color="white">
            <Text>{title} </Text>
            <Text marginLeft="s" variant="button" color="primary">
              {action}
            </Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};

export default Footer;
