import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

//config
import Colors from "./../config/Colors";
//components
import Screen from "./../components/Screen";
import SearchInputField from "../components/SearchInputField";
import CarouselCards from "../components/Carousel/CarouselCards";

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>

      <Text style={styles.mainTextHeading}>
        What do you want to cook today ?
      </Text>

      <View style={styles.miniContainer}>
        <SearchInputField
          iconName="search"
          placeholder="Search For Recipes"
        ></SearchInputField>

        <View style={styles.icons}>
          <Feather
            name="sliders"
            size={23}
            color={Colors.white}
            onPress={() => console.log("First icon pressed")}
          />
        </View>

        <View style={styles.icons}>
          <MaterialCommunityIcons
            name="filter-variant"
            size={29}
            color={Colors.white}
            onPress={() => console.log("Filter icon pressed")}
          />
        </View>
      </View>

      <View style={styles.selectionTextContainer}>
        <Text style={{ color: Colors.logoColor, fontSize: RFPercentage(2.5) }}>
          Newest Foods
        </Text>
        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.5) }}>
          Best Recipes
        </Text>
        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.5) }}>
          Popular Ingredients
        </Text>
      </View>
      <View style={styles.crousel}>
        <CarouselCards />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  logo: {
    width: RFPercentage(20),
    height: RFPercentage(13),
    top: RFPercentage(-2),
    left: RFPercentage(-0.6),
  },
  mainTextHeading: {
    color: Colors.white,
    fontSize: RFPercentage(3),
    left: RFPercentage(2.5),
    top: RFPercentage(-1.7),
  },
  miniContainer: {
    flexDirection: "row",
    height: RFPercentage(10),
    width: RFPercentage(30),
    alignItems: "center",
    top: RFPercentage(1),
  },
  icons: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    width: RFPercentage(9),
    height: RFPercentage(8.4),
    borderRadius: RFPercentage(2),
    borderWidth: RFPercentage(0.3),
    borderColor: Colors.searchInput,
    left: RFPercentage(2.4),
    marginHorizontal: RFPercentage(0.4),
  },
  crousel: {
    alignItems: "center",
    justifyContent: "center",
  },

  selectionTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: RFPercentage(3.4),
  },
  // selectionText: {
  //   color: Colors.white,
  //   fontSize: RFPercentage(2.5),
  // },
});

export default HomeScreen;
