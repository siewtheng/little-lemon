import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

const Banner = ({ title, subtitle, description, searchText, onChangeSearchText }) => {
    return (
        <View style={styles.bannerContainer}>

            <Text style={styles.bannerTitle}>{title}</Text>
            
            <View style={styles.contentRow}>
                <View style={styles.textContainer}>
                    <Text style={styles.bannerSubtitle}>{subtitle}</Text>
                    <Text style={styles.bannerDescription}>{description}</Text>
                </View>
                <Image source={require('../assets/hero.png')} style={styles.bannerImage} />
            </View>
            
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={searchText}
                onChangeText={onChangeSearchText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 10,
        backgroundColor: '#004d40',
        marginBottom: 10,
    },

    contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textContainer: {
        flex: 1,
    },

    bannerImage: {
        width: 120,
        height: 120,
        marginBottom: 15,
        marginLeft: 20,
        resizeMode: "cover",
        borderRadius: 10,
    },

    bannerTitle: {
        fontSize: 36,
        fontWeight: '900',
    },

    bannerSubtitle: {
        fontSize: 26,
        color: '#ffffff',
        fontWeight: '500',
        marginBottom: 10,
    },

    bannerDescription: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 20,
    },

    searchBar: {
        fontSize: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '100%',
    }
});

export default Banner;