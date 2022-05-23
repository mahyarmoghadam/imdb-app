/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useRef } from 'react';
import { ColorSchemeName, Dimensions, Pressable } from 'react-native';
// import Animated, { useSharedValue } from 'react-native-reanimated';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// const xOffsetValue = useSharedValue(0);

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />

      {/* <Animated.View style={{
        width: getWidth(),
        height: 2,
        position: 'absolute',
        bottom: 88,
        left: 25,
        backgroundColor: 'red',
        borderRadius: 50
      }}>

      </Animated.View> */}
    </NavigationContainer>
  );

}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>

    </>
  );
}

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
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginHorizontal: 15,
          borderRadius: 15,
          height: 60,
          position: 'absolute',
          bottom: 30,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 0,
            height: 10
          }
        }
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Home',
          tabBarIcon: ({ focused }) => <MaterialIcons name="home" size={30} color={focused ? 'red' : 'grey'} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ focused }) => <MaterialIcons name="explore" size={30} color={focused ? 'red' : 'grey'} />,
        }}
      />
      <BottomTab.Screen
        name="Home2"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ focused }) => <FontAwesome5 name="video" size={25} color={focused ? 'red' : 'grey'} />,
        }}
      />

      <BottomTab.Screen
        name="Home"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ focused }) => <FontAwesome5 name="user-alt" size={25} color={focused ? 'red' : 'grey'} />,
        }}
      />


    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const getWidth = () => {
  const width = Dimensions.get('window').width - 40;

  return width / 4;
}