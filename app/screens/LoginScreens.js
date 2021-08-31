import React from "react";
import { Text, View, StyleSheet, StatusBar, TextInput } from "react-native";
import AppText from "../components/AppText";
import InputField from "../components/InputField";
import SocialLinks from "../components/SocialLinks";
import colors from "../config/colors";
import AppButton from "./../components/AppButton";

function LoginScreens(props) {
  return (
    <View style={styles.container}>
      <AppText text="Duolingo" style={styles.mainHeading} />
      <AppText text="Login to" style={styles.subHeading1} />
      <AppText text="your Account" style={styles.subHeading2} />
      <InputField
        placeholder="Username or Email"
        style={{ top: 200 }}
      ></InputField>
      <InputField placeholder="Password" style={{ top: 258 }}></InputField>
      <Text style={styles.forgetPassText}>Forget your Password ?</Text>
      <AppButton backgroundColor={colors.yellow} width="85%"></AppButton>
      <Text style={styles.loginwithText}>or login with</Text>
      <AppButton backgroundColor={colors.yellow} width="85%"></AppButton>
      <SocialLinks></SocialLinks>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeading: {
    fontSize: 40,
    fontWeight: "bold",
    top: -220,
  },
  subHeading1: {
    fontSize: 30,
    fontWeight: "bold",
    top: -185,
  },
  subHeading2: {
    fontSize: 30,
    fontWeight: "bold",
    top: -180,
  },
  forgetPassText: {
    color: colors.white,
    alignSelf: "flex-end",
    right: 30,
    top: -20,
  },
  loginwithText: {
    color: colors.white,
    top: 88,
  },
});

export default LoginScreens;
