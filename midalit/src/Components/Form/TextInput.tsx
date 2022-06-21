import React, { forwardRef } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Box, useTheme } from "../../Theme";
import RoundedIcon from "../RoundedIcon";

interface Props extends RNTextInputProps {
  icon: string;
  error?: string;
  touched?: boolean;
}

const TextInput = forwardRef<RNTextInput, Props>(
  ({ icon, error, touched, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        alignItems="center"
        borderRadius="s"
        height={48}
        padding="s"
        borderColor={reColor}
        borderWidth={StyleSheet.hairlineWidth}>
        <Box padding="s">
          <Icon name={icon} size={16} {...{ color }} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            {...props}
            {...{ ref }}
            placeholderTextColor={color}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={!error ? "check" : "x"}
            color="white"
            size={SIZE}
            backgroundColor={!error ? "primary" : "danger"}
          />
        )}
      </Box>
    );
  },
);

export default TextInput;
