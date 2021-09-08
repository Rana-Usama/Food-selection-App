import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";

function SearchInputField({ iconName, placeholder }) {
  return (
    <View style={styles.searchInputContainer}>
      <EvilIcons
        name={iconName}
        size={25}
        color={Colors.iconsColor}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.iconsColor}
        style={styles.searchFieldText}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInputContainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.searchInput,
    width: RFPercentage(35),
    height: RFPercentage(8),
    borderRadius: RFPercentage(2),
    left: RFPercentage(2),
  },
  searchIcon: {
    left: RFPercentage(1.5),
  },
  searchFieldText: {
    color: Colors.white,
    left: RFPercentage(2),
    fontSize: RFPercentage(2.5),
    width: "100%",
  },
});

export default SearchInputField;
