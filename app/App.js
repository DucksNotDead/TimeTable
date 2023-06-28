import React from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import TimePointScreen from "./screens/TimePointScreen";

export default function App() {

  const Stack = createStackNavigator()
  return (
      <>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{animationEnabled: true}}>

            <Stack.Screen name={'home'} component={HomeScreen} options={{ title: 'TimeTable' }} />

            <Stack.Screen name={'timePoint'} component={TimePointScreen} options={({ route }) => ({ title: route.params.title + '. Список дел' })} />

          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style={'auto'}/>

      </>
  );
}

const styles = StyleSheet.create({

});
