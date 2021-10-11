import React, { useEffect, useState } from 'react';
import {Appearance} from 'react-native';
import {
    NavigationContainer,
    DefaultTheme as NavigationTheme,
    DarkTheme as NavigationDarkTheme,
  } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserView from '../screens/userView';
import getTheme from '../utils/theme';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const [isDarkTheme, toggleDarkMode] = useState(false);
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    toggleDarkMode(colorScheme === 'dark');
  }, []);

  return (
      <NavigationContainer theme={getTheme(isDarkTheme ? NavigationDarkTheme : NavigationTheme)}>
        <Stack.Navigator>
          <Stack.Screen
            key="home"
            options={{headerShown: false}}
            name="Home"
            component={UserView}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default RootNavigation;