import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

function InputField({ placeholder, style }) {
  return (
    <View style={[styles.inputFieldContainer, style]}>
      <TextInput placeholder={placeholder} style={styles.inputText}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  inputFieldContainer: {
    width: "85%",
    backgroundColor: colors.light,
    height: 52,
    borderRadius: 10,
    position: "absolute",
    marginVertical: 30,
  },
  inputText: {
    alignSelf: "flex-start",
    top: 10,
    fontSize: 17,
    color: colors.white,
    left: 20,
  },
});
export default InputField;
