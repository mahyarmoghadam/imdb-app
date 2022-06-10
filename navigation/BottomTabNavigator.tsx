import {
  MaterialIcons,
  Octicons,
  Feather,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import { RootTabParamList, RootTabScreenProps } from "../types";



const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          padding: 10,
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
          height: 60,
          position: "absolute",
          backgroundColor: "#4c3441",
          borderTopWidth: 0
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
              name="search"
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
        component={ProfileScreen}
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
