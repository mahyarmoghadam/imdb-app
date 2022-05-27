import { MaterialIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeScreen from "../screens/Home";
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
      initialRouteName="TabOne"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          marginHorizontal: 15,
          borderRadius: 15,
          height: 60,
          position: "absolute",
          bottom: 30,
          backgroundColor: "#fff",
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
        name="TabOne"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={30}
              color={focused ? "red" : "grey"}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={HomeScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="explore"
              size={30}
              color={focused ? "red" : "grey"}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="video"
              size={25}
              color={focused ? "red" : "grey"}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={25}
              color={focused ? "red" : "grey"}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}


export {BottomTabNavigator};