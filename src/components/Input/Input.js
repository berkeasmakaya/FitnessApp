import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from './Input.style';

function Input ({label, onChangeText, placeholder, keyboardType}) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container} >
                <TextInput placeholder={placeholder} onChangeText={onChangeText} keyboardType={keyboardType} />
            </View>
            
        </View>
    );
}

export default Input;