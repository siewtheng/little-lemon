import React, {useEffect} from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const SplashScreen = ({onReady}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onReady();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onReady]);

  return (
    <View style={styles.splashView}>

      <Image 
        source={require('../assets/little-lemon-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      <ActivityIndicator size="large" color="#495E57" style={styles.activityIndicator} />

      <Text style={styles.text}>
        SiewTheng
      </Text>
    </View>
)};

const styles = StyleSheet.create({
  splashView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  logo: {
    width: 150,
    height: 300,
    marginBottom: 20,
  },
  activityIndicator: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#888',
    fontWeight: "400"
  },
})

export default SplashScreen;
