import React from "react";

import { AuthNavigationProps } from "../../Components/Navigation";
import Container from "../../Components/Container";
import { Box, Text } from "../../Theme";
import Button from "../Button";
import RoundedIcon from "../../Components/RoundedIcon";
import RoundedIconButton from "../../Components/RoundedIconButton";

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const footer = () => (
    <Box flexDirection="row" justifyContent="center">
      <RoundedIconButton
        name="x"
        size={60}
        backgroundColor="white"
        color="secondary"
        onPress={() => navigation.pop()}
      />
    </Box>
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Box marginBottom="l" alignSelf="center">
        <RoundedIcon
          name="check"
          size={60}
          backgroundColor="primaryLight"
          color="primary"
        />
      </Box>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Your password was successfully changed
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Login again
      </Text>
      <Box alignItems="center" marginTop="m">
        <Button
          variant="primary"
          onPress={() => navigation.navigate("Login")}
          title="Proceed to Login"
        />
      </Box>
    </Container>
  );
};

export default PasswordChanged;
