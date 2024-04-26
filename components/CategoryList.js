import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const CategoryList = ({ categories, selectedCategories, onCategorySelect }) => {
    const isCategorySelected = (category) => selectedCategories.includes(category);

    const toTitleCase = (str) => {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    return (
        <ScrollView style={styles.container} horizontal={true}>
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.categoryItem,
                        isCategorySelected(category) ? styles.categoryItemSelected : {}
                    ]}
                    onPress={() => onCategorySelect(category)}
                >
                    <Text style={[
                        styles.categoryText,
                        isCategorySelected(category) ? styles.categoryTextSelected : {}
                    ]}>
                        {toTitleCase(category)}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    categoryItem: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 15,
        borderColor: '#ccc',
        backgroundColor: "grey",
        marginBottom: 5,
    },
    categoryItemSelected: {
        backgroundColor: 'navy',
    },
    categoryText: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold",
    },
    categoryTextSelected: {
        color: 'white',
    },
});

export default CategoryList;