import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import { EvilIcons } from "@expo/vector-icons";

function SocialLinks(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign
        name="google"
        size={24}
        color={colors.white}
        style={styles.googleIcon}
      />
      <Text style={styles.googleText}>Google</Text>
      <View style={styles.line}></View>
      <EvilIcons
        name="sc-facebook"
        size={24}
        color={colors.white}
        style={styles.facebookIcon}
      />
      <Text style={styles.facebookText}>Facebook</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    backgroundColor: colors.light,
    height: 55,
    borderRadius: 10,
    position: "absolute",
    bottom: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  googleIcon: {
    left: 40,
  },
  googleText: {
    color: colors.white,
    left: 50,
    fontSize: 15,
  },
  line: {
    height: 52,
    backgroundColor: colors.main,
    width: 2,
    left: 82,
  },
  facebookIcon: {
    left: 100,
    fontSize: 30,
  },
  facebookText: {
    color: colors.white,
    left: 100,
    fontSize: 15,
  },
});

export default SocialLinks;
