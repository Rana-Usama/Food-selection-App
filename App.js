import React from "react";
import HomeScreen from "./app/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
        {/* <Stack.Screen name="HomeTab" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
