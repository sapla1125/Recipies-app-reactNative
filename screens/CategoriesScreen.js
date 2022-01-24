//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';



// create a component
const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
        <TouchableOpacity style={styles.gridItem} onPress={() => {
            props.navigation.navigate("Meal Category")
        }}>
        <View >
            <Text>{itemData.item.title}</Text>
        </View>
        </TouchableOpacity>
        )}
        
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150,
    }
});

//make this component available to the app
export default CategoriesScreen;
