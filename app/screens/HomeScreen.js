import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
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
  const [searchInputField, setSearchInputField] = useState([
    {
      iconName: "search",
      placeholder: "Search For Recipes",
      value: "",
    },
  ]);

  return (
    <Screen style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>

      <Text style={styles.mainTextHeading}>
        What do you want to cook today ?
      </Text>

      {/* search input field and filter,search icons */}
      <View style={styles.miniContainer}>
        {searchInputField.map((item, i) => (
          <SearchInputField
            key={i}
            iconName={item.iconName}
            placeholder={item.placeholder}
          />
        ))}
        <TouchableOpacity
          style={[styles.icons, { marginLeft: RFPercentage(3) }]}
        >
          <Feather
            name="sliders"
            size={RFPercentage(3)}
            color={Colors.white}
            onPress={() => console.log("First icon pressed")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.icons, { marginLeft: RFPercentage(1.9) }]}
        >
          <MaterialCommunityIcons
            name="filter-variant"
            size={RFPercentage(4)}
            color={Colors.white}
            onPress={() => console.log("Filter icon pressed")}
          />
        </TouchableOpacity>
      </View>

      {/* Different foods and recipies Text buttons */}
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

      {/*Crouasel */}
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
    width: RFPercentage(7),
    height: RFPercentage(7),
    borderRadius: RFPercentage(2),
    borderWidth: RFPercentage(0.3),
    borderColor: Colors.searchInput,
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
});

export default HomeScreen;
