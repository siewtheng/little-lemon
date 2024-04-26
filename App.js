import React, { useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider, useAuth } from './contexts/AuthContext';

import SplashScreen from './screens/SplashScreen';

const AppContent = () => {
  const { state, authActions } = useAuth();

  useEffect(() => {
    authActions.setLoading(true);
    setTimeout(() => { 
      authActions.onboard({});
    }, 1500);
  }, [authActions]);

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return <AppNavigator isOnboardingCompleted={state.isOnboardingCompleted} />;
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}


