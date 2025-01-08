import React from 'react'
import { LoginPage, SignupPage, EntryPage } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Entry'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Entry' component={EntryPage} />
            <Stack.Screen name='Login' component={LoginPage} />
            <Stack.Screen name='SignUp' component={SignupPage} />
        </Stack.Navigator>
    )
}

export default AuthStack
