//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';

// create a component
const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>CategoryMealsScreen</Text>
            <Button title="Go to Meals" onPress={() => {
                props.navigation.navigate('Meal Details')
            }} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CategoryMealsScreen;
