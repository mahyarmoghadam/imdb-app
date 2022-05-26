import { Block } from 'expo-ui-kit';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import HeaderComponent from './components/HeaderComponent';

export default function HomeScreen() {
    return (
        <Block >
            <HeaderComponent/>
        </Block>
    );
}

const styles = StyleSheet.create({
    
});
