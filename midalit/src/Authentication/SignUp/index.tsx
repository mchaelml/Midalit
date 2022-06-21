import React, { ReactElement, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Container from "../../Components/Container";
import Button from "../Button";
import { Text, Box } from "../../Theme";
import TextInput from "../../Components/Form/TextInput";
import Footer from "../Footer";
import { AuthNavigationProps } from "../../Components/Navigation";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Password don't match")
    .required(),
});

const SignUp = ({
  navigation,
}: AuthNavigationProps<"SignUp">): ReactElement => {
  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);
  const footer = () => (
    <Footer
      title="Have an account? "
      action="Log in here"
      onPress={() => navigation.navigate("Login")}
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
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema: SignUpSchema,
  });
  return (
    <Container pattern={1} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Create Account
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Create your credentials below to sign up
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
        <Box marginBottom="m">
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
            returnKeyLabel="next"
            returnKeyType="go"
            onSubmitEditing={() => passwordConfirmation.current?.focus()}
            autoCompleteType="password"
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Confirm your password"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            secureTextEntry
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            value={values.passwordConfirmation}
            autoCapitalize="none"
            returnKeyLabel="submit"
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit()}
            autoCompleteType="password"
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button variant="primary" onPress={handleSubmit} title="Sign Up" />
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
