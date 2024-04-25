import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { validateEmail, validateName } from '../utils/index.js'
import { AuthContext } from '../contexts/AuthContext.js';

const Onboarding = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const { onboard } = useContext(AuthContext);

  const handleNameChange = text => {
    setName(text);
    setIsValid(validateName(text) && validateEmail(email));
  };

  const handleEmailChange = text => {
    setEmail(text);
    setIsValid(validateName(name) && validateEmail(text));
  };

  const handlePress = async () => {
    // call onboard function from AUthContext with name and email
    await onboard({name, email});
  };

  return (
    <View style={styles.container}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />

        <Text style={styles.welcomeText}>
            Welcome to Little Lemon Restaurant !
        </Text>

        <Text style={styles.inputTitle}>Full Name</Text>
        <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={handleNameChange}
            style={styles.input}
        />

        <Text style={styles.inputTitle}>Email Address</Text>
        <TextInput
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize='none'
            style={styles.input}
        />

        <Button
            title="Next"
            onPress={handlePress}
            disabled={!isValid}
            style={styles.button}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center" 
      },
    
    logo: {
        resizeMode: "contain",
        marginTop: 50,
        height: 100,
        width: 150
    },

    welcomeText: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 20
    },

    inputTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    input: {
        fontSize: 18,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        alignSelf: "stretch",
        borderColor: "black"
    },

    button: {
        backgroundColor: "#027148",
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        alignSelf: "stretch",
        borderColor: "black"

    }
});

export default Onboarding;
