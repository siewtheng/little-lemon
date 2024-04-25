import React, { createContext, useEffect, useReducer, useMemo } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './contexts/AuthContext';

import Onboarding from './screens/Onboarding';
import Profile from './screens/Profile';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'ONBOARD':
          return {
            ...prevState,
            isOnboardingCompleted: action.isOnboardingCompleted,
            isLoading: false,
          };
        case 'SET_LOADING':
          return {
            ...prevState,
            isLoading: action.isLoading,
          };
        default:
          return prevState;
      }
    },
    {
      isLoading: true,
      isOnboardingCompleted: false,
    }
  );

  useEffect(() => {
    // Fetch onboarding status from AsyncStorage
    const checkOnboardingStatus = async () => {
      try {
        // Attempt to fetch onboarding status from AsyncStorage
        const getUserProfile = await AsyncStorage.getItem("profile");

        // If onboarding status is retrieved successfully, update state
        if (getUserProfile !== null) {
          dispatch({ type: "ONBOARD", isOnboardingCompleted: true });
        } else {
          dispatch({ type: "ONBOARD", isOnboardingCompleted: false });
        }
        dispatch({ type: 'SET_LOADING', isLoading: false });
      } catch (e) {
        // if any error during AsyncStorage operation
        console.error('Error retrieving onboarding status:', e);
      } 
    };
    checkOnboardingStatus();
  }, []);

  const authContext = useMemo(
    () => ({
      // Set onboarding status and save data to AsyncStorage
      onboard: async (data) => {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem("profile", jsonValue);
        } catch (e) {
          console.error('Error at authContext onboard:', e);
        }
        dispatch({ type: "ONBOARD", isOnboardingCompleted: true });
      },
      
      // Update user data in AsyncStorage
      update: async (data) => {
        try {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem("profile", jsonValue);
        } catch (e) {
          console.error('Error at authContext update:', e);
        }
        Alert.alert("Success", "Successfully saved changes!!!");
      },
      
      // Clear AsyncStorage and logout user
      logout: async () => {
        try {
          await AsyncStorage.clear();
          dispatch({ type: "ONBOARD", isOnboardingCompleted: false });
        } catch (e) {
          console.error('Error at authContext logout:', e);
          Alert.alert("Error", "Failed to log out. Please try again!");
        }
      },
    }),
    [state.isOnboardingCompleted]
  );

  //render the SplashScreen until the onboarding status is fetched
  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isOnboardingCompleted ? (
            <Stack.Screen name="Profile" component={Profile} />
          ) : (
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }} // Hide header for Onboarding screen
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


