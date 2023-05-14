/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ForecastClubScreen from './forecastClub/ForecastClubScreen';
import ForecastClubLoginScreen from './forecastClub/ForecastClubLoginScreen';
import JerseyKitScreen from './jerseyKit/JerseyKitScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* forecast user interfaces  */}
        {/* <Stack.Screen
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
        /> */}

        {/* jersey kit user interfaces  */}
        <Stack.Screen
          name="JerseyKit"
          component={JerseyKitScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
