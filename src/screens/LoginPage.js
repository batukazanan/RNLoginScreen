import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import React, { useState } from 'react';
import { Loading, CustomTextInput, CustomButton } from '../components';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.container}>

            <Text style={styles.welcome}>Welcome back!</Text>

            <Image
                source={require('../../assets/images/user.png')}
                style={styles.userImage}
            />

            <CustomTextInput
                title='Email'
                placeholder='Enter your Email'
                isSecureText={false}
                onChangeText={setEmail}
                value={email}
            />
            <CustomTextInput
                title='Password'
                placeholder='Enter your Password'
                isSecureText={true}
                onChangeText={setPassword}
                value={password}
            />

            <CustomButton
                buttonText='Login'
                handleOnPress={() => setIsLoading(true)}
                buttonColor='black'
                buttonTextColor='white'
            />

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

});