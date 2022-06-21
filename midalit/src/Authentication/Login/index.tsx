import React, { ReactElement, useRef } from "react";
import { useFormik } from "formik";
import { TextInput as RNTextInput } from "react-native";
import * as Yup from "yup";
import { BorderlessButton } from "react-native-gesture-handler";
import { CommonActions } from "@react-navigation/native";

import Container from "../../Components/Container";
import Button from "../Button";
import { Text, Box } from "../../Theme";
import TextInput from "../../Components/Form/TextInput";
import CheckBox from "../../Components/Form/CheckBox";
import Footer from "../Footer";
import { AuthNavigationProps } from "../../Components/Navigation";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">): ReactElement => {
  const password = useRef<RNTextInput>(null);
  const footer = () => (
    <Footer
      title="Don't have an account? "
      action="Sign up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: { email: "", password: "", remember: false },
    onSubmit: () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        }),
      ),
    validationSchema: LoginSchema,
  });
  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Welcome back
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Use your credentials below and login to your account
      </Text>
      <Box>
        <Box marginBottom="m">
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
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <TextInput
          ref={password}
          icon="lock"
          placeholder="Enter your password"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          secureTextEntry
          error={errors.password}
          touched={touched.password}
          value={values.password}
          autoCapitalize="none"
          returnKeyLabel="submit"
          returnKeyType="go"
          onSubmitEditing={() => handleSubmit()}
          autoCompleteType="password"
        />
        <Box
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
          marginVertical="m"
        >
          <CheckBox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text color="primary">Forgot password</Text>
          </BorderlessButton>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={handleSubmit}
            title="Log into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
