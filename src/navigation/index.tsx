import React, { useEffect, useState } from 'react';
import {Appearance} from 'react-native';
import {
    NavigationContainer,
    DefaultTheme as NavigationTheme,
    DarkTheme as NavigationDarkTheme,
  } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserView from '../screens/UserView';
import getTheme from '../utils/theme';
import DetailsView from '../screens/DetailsView';
import ErrorBoundary from '../utils/ErrorBoundary';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const [isDarkTheme, toggleDarkMode] = useState(false);
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    toggleDarkMode(colorScheme === 'dark');
  }, []);

  return (
      <NavigationContainer theme={getTheme(isDarkTheme ? NavigationDarkTheme : NavigationTheme)}>
        <Stack.Navigator initialRouteName="UserView">
          <Stack.Screen
            key="home"
            options={{ title: 'User View'}}
            name="UserView"
            component={UserView}
          />
           <Stack.Screen
            key="detailView"
            name="DetailsView"
            options={({ route }: any) => ({ title: route.params.name })}
            component={DetailsView}
          />
           <Stack.Screen
            key="error"
            name="error"
            options={{headerShown: false}}
            component={ErrorBoundary}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default RootNavigation;