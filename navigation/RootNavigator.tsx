import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalScreen from "../screens/Shared/ModalScreen";
import NotFoundScreen from "../screens/Shared/NotFoundScreen";
import { RootStackParamList } from "../types";
import { BottomTabNavigator } from "./BottomTabNavigator";
import MovieDetailScreen from "../screens/Movie/Detail/index";
import PosterScreen from "../screens/Movie/Poster";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Poster"
          component={PosterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
}

export default RootNavigator;
