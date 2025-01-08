import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ buttonText, handleOnPress, buttonColor, buttonTextColor }) => {
    return (
        <Pressable
            onPress={handleOnPress}
            style={[
                { backgroundColor: buttonColor },
                styles.button
            ]}>

            <Text style={[
                { color: buttonTextColor },
                styles.text]}
            >{buttonText}</Text>

        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({

    button: {
        width: '80%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginTop: 20,
        borderWidth: 1,
    },

    text: {
        fontSize: 15,
        fontWeight: '500',
    },
})