import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Category from "../components/Category";
import Content from "../components/Content";
import Profile from "./../components/Profile";

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            title: "Category",
            headerStyle: {
              backgroundColor: "#43e97b"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerTitleAlign: "center"
          }}
          name="Category"
          component={Category}
        />
        <Stack.Screen
          options={{
            title: "Content",
            headerStyle: {
              backgroundColor: "#43e97b"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerTitleAlign: "center"
          }}
          name="Content"
          component={Content}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
