import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Linking } from "react-native";

import Container from "../../Components/Container";
import Footer from "../Footer";
import { AuthNavigationProps } from "../../Components/Navigation";
import { Box, Text } from "../../Theme";
import TextInput from "../../Components/Form/TextInput";
import Button from "../Button";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const footer = () => (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto: support@help.com")}
    />
  );
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: { email: "" },
    onSubmit: () => navigation.navigate("PasswordChanged"),
    validationSchema: ForgotPasswordSchema,
  });
  return (
    <Container pattern={2} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Forgot password?
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Enter the email address associated with your account
      </Text>
      <Box>
        <TextInput
          icon="mail"
          placeholder="Enter your email"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}
          value={values.email}
          autoCapitalize="none"
          autoCompleteType="email"
          returnKeyLabel="next"
          returnKeyType="go"
          onSubmitEditing={() => handleSubmit()}
        />
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={handleSubmit}
            title="Reset password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
