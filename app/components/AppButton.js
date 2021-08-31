import React from "react";
import { TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function AppButton({ backgroundColor, width }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        width: width,
        padding: 16,
        borderRadius: 10,
        position: "absolute",
        bottom: 180,
      }}
    >
      <Text style={{ alignSelf: "center", color: colors.white, fontSize: 16 }}>
        Log in
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;
