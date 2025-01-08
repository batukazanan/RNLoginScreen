import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const EntryPage = ({ navigation }) => {
    return (

        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={require('../../assets/images/entry-page-img.png')} />
            </View>

            <View style={styles.buttonsContainer}>

                <Pressable
                    onPress={() => navigation.navigate('Login')}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.signupButton}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </Pressable>
            </View>

        </View>

    )
}

export default EntryPage

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    buttonsContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    imageContainer: {
        flex: 2,
    },

    signupButton: {
        width: "70%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginTop: 20,
        borderWidth: 1.7,
        backgroundColor: 'white'
    },

    signupText: {
        fontSize: 15,
        fontWeight: '500'
    },

    loginButton: {
        width: "70%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: 'black'
    },

    loginText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white'
    }

})