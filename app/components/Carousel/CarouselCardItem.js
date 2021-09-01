import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome5 } from "@expo/vector-icons";

//config
import Colors from "../../config/Colors";

export const SLIDER_WIDTH = Dimensions.get("window").width + 5;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <ImageBackground source={{ uri: item.imgUrl }} style={styles.image}>
        <View
          style={{
            backgroundColor: "black",
            height: RFPercentage(8),
            width: RFPercentage(8),
            top: RFPercentage(3),
            left: RFPercentage(2),
            borderRadius: RFPercentage(1),
            opacity: 0.8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="bookmark" size={24} color={Colors.white} />
        </View>
        <View
          style={{
            backgroundColor: "black",
            height: RFPercentage(10),
            borderTopLeftRadius: RFPercentage(5),
            borderTopRightRadius: RFPercentage(5),
            borderBottomLeftRadius: RFPercentage(4),
            borderBottomRightRadius: RFPercentage(4),
            top: RFPercentage(31),
            opacity: 0.7,
          }}
        ></View>
      </ImageBackground>
      {/* <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    overflow: "hidden",
    borderRadius: RFPercentage(4),
    width: ITEM_WIDTH,
    shadowColor: "#000",
    top: RFPercentage(8),
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: RFPercentage(49),
    borderTopRightRadius: RFPercentage(4),
    borderTopLeftRadius: RFPercentage(4),
  },
  //   header: {
  //     color: "#222",
  //     fontSize: 28,
  //     fontWeight: "bold",
  //     paddingLeft: 20,
  //     paddingTop: 20,
  //   },
  //   body: {
  //     color: "#222",
  //     fontSize: 18,
  //     paddingLeft: 20,
  //     paddingLeft: 20,
  //     paddingRight: 20,
  //   },
});

export default CarouselCardItem;
