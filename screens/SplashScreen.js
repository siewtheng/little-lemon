import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


const SplashScreen = () => {
  return (
    <View style={styles.splashView}>
      <ActivityIndicator size="large" />
    </View>
)};

const styles = StyleSheet.create({
    splashView: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }
})

export default SplashScreen;
