import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({ title, placeholder, isSecureText, onChangeText, value }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputBoxText} >{title}</Text>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={isSecureText}
                onChangeText={onChangeText}
                value={value}

                style={styles.TextInputStyle}
            />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({

    inputContainer: {
        width: '80%',
    },

    inputBoxText: {
        fontWeight: 'bold',
    },

    TextInputStyle: {
        borderWidth: 0.2,
        borderRadius: 7,
        width: '100%',
        height: 50,
        marginVertical: 12,
        textAlign: 'center',
        backgroundColor: '#F7F8F9'
    }

})