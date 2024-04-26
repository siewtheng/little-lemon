import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Text, Image, Button, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../contexts/AuthContext';

import { MaskedTextInput } from 'react-native-mask-text';
import * as ImagePicker from 'expo-image-picker';
import Checkbox from 'expo-checkbox';


const Profile = () => {
  const { state, authActions } = useAuth();

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    isNotiChecked: false
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (name, value) => {
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const loadProfile = async () => {
      const storedProfile = await AsyncStorage.getItem('profile');
      const storedImage = await AsyncStorage.getItem('imageUri');

      if (storedProfile) { 
        setProfile(JSON.parse(storedProfile))
        
      };

      if (storedImage) {
        setImage(storedImage)
      };

      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert("Sorry, we need camera roll permissions to make this work!");
      }

    };
    loadProfile();
  }, []);

  const getInitials = (name) => {
    return name ? name.substring(0, 2).toUpperCase() : '';
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets && result.assets.length > 0) {

        const uri = result.assets[0].uri; // Access URI from the first asset
        setImage(uri);
        
    } else {
        // Log different scenarios for debugging
        if (result.cancelled) {
            console.log("Image picking was canceled.");
        } else if (!result.assets || result.assets.length === 0) {
            console.log("No assets found in the result.");
        } else {
            console.log("An unexpected scenario occurred.");
        }
    }
  };

  const saveProfile = async () => {
    await AsyncStorage.setItem('profile', JSON.stringify(profile));
    await AsyncStorage.setItem('imageUri', image);
    alert('Profile saved successfully!');
  };
  
  return (
      <View>
        
        {image ? 
          (<Image source={{ uri: image }} style={styles.image} />) : (
          (<View style={styles.initialsPlaceholder}>
            <Text style={styles.initialsText}>{getInitials(profile.name)}</Text>
          </View>)
        )}
        <Button title="Pick an Image" onPress={pickImage} />
        
        <TextInput
          value={profile.name}
          onChangeText={(text) => handleInputChange('name', text)}
          placeholder="Enter name"
          style={styles.input}
        />

        <TextInput
          value={profile.email}
          onChangeText={(text) => handleInputChange('email', text)}
          placeholder="Enter email"
          style={styles.input}
        />
        
        <View>
          <MaskedTextInput
            mask="(999) 999-9999"
            value={profile.phoneNumber}
            onChangeText={(text) => handleInputChange('phoneNumber', text)}
            style={styles.input}
            placeholder="(123) 456 7890"
            keyboardType="numeric"
          />
        </View>

        <Checkbox
          style={styles.checkbox}
          value={profile.isNotiChecked}
          onValueChange={(value) => handleInputChange('isNotiChecked', value)}
          color={profile.isNotiChecked ? '#4630EB' : undefined}
        />

        <Button title="Save Changes" onPress={saveProfile} />

        <Button 
          title="Logout" 
          onPress={authActions.logout}
          color="#ff6347"   
      />

      </View>
  );
};

const styles = StyleSheet.create({
  
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },

  initialsPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  initialsText: {
    fontSize: 40,
    color: '#fff',
  },

  checkbox: {
    margin: 8,
  },

});


export default Profile;
