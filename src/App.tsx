/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ForecastClubScreen from './forecastClub/ForecastClubScreen';
import ForecastClubLoginScreen from './forecastClub/ForecastClubLoginScreen';
import JerseyKitScreen from './jerseyKit/JerseyKitScreen';
import JerseyKitDetailsScreen from './jerseyKit/JerseyKitDetailsScreen';
import PlayWithForms from './forms/Forms';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* forecast user interfaces  */}
        <Stack.Screen
          name="ForecastClub"
          component={ForecastClubScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForecastClubLogin"
          component={ForecastClubLoginScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* jersey kit user interfaces  */}
        <Stack.Screen
          name="JerseyKit"
          component={JerseyKitScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="JerseyKitDetails"
          component={JerseyKitDetailsScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Forms" component={PlayWithForms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
