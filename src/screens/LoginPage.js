import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image
} from 'react-native';

import React, { useState } from 'react';
import Loading from '../components/Loading';

const LoginPage = ({ navigation }) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.container}>

            <Text style={styles.welcome}>Welcome back!</Text>

            <Image
                source={require('../../assets/images/user.png')}
                style={styles.userImage}
            />

            <View style={styles.inputContainer}>
                <Text style={styles.inputBoxText} >Email</Text>
                <TextInput
                    inputMode='email'
                    placeholder='Enter your email'
                    style={styles.TextInputStyle}
                    onChangeText={setName}
                    value={name}
                />

                <Text style={styles.inputBoxText} >Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder='Enter your password'
                    style={styles.TextInputStyle}
                    onChangeText={setLastName}
                    value={lastName}
                />
            </View>

            <Pressable
                onPress={() => setIsLoading(true)}
                style={ styles.loginButton }>
                <Text style= {styles.loginText}>Login</Text>
            </Pressable>

            {isLoading
                ?
                <Loading changeIsLoading={() => setIsLoading(false)} />
                : null}

        </View>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputBoxText: {
        fontWeight: 'bold',
    },

    inputContainer: {
        width: '80%',
    },

    TextInputStyle: {
        borderWidth: 0.2,
        borderRadius: 7,
        width: '100%',
        height: 50,
        marginVertical: 12,
        textAlign: 'center',
        backgroundColor: '#F7F8F9'
    },

    userImage: {
        width: 100,
        height: 100,
        marginVertical: 12
    },

    welcome: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 20
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
    },

});


