import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../screens/Onboarding';
import Profile from '../screens/Profile';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = ({ isOnboardingCompleted }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isOnboardingCompleted ? (
          <>
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Profile" 
              component={Profile}
            />
          </>
        ) : (
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;