import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppText({ text, style }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 40,
  },
});

export default AppText;
