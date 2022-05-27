import {
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Octicons,
  Feather,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeScreen from "../screens/Home";
import MovieDetailScreen from "../screens/Movie/Detail";
import { RootTabParamList, RootTabScreenProps } from "../types";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          marginHorizontal: 15,
          borderRadius: 15,
          height: 60,
          position: "absolute",
          bottom: 30,
          borderColor: "#4c3441",
          borderWidth: 1,
          backgroundColor: "#4c3441",
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 0,
            height: 10,
          },
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="home"
              size={22}
              color={focused ? "#bc9d89" : "grey"}
            />
          ),
          headerShown: false,
        })}
      />

      <BottomTab.Screen
        name="Explore"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Explore">) => ({
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="explore"
              size={25}
              color={focused ? "#bc9d89" : "grey"}
            />
          ),
          headerShown: false,
        })}
      />

      <BottomTab.Screen
        name="Video"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Video">) => ({
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="video"
              size={22}
              color={focused ? "#bc9d89" : "grey"}
            />
          ),
          headerShown: false,
        })}
      />

      <BottomTab.Screen
        name="Profile"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Profile">) => ({
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={22}
              color={focused ? "#bc9d89" : "grey"}
            />
          ),
          headerShown: false,
        })}
      />
    </BottomTab.Navigator>
  );
}

export { BottomTabNavigator };
