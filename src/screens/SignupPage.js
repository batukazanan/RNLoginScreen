import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { CustomTextInput, CustomButton } from '../components'

const SignupPage = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.signupTitle}>Sign Up to get started!</Text>
      </View>

      <View style={styles.textInputContainer}>

        <CustomTextInput
          title='Name'
          placeholder='Enter your name'
          isSecureText={false}
          onChangeText={setName}
          value={name}
        />

        <CustomTextInput
          title='Email'
          placeholder='Enter your email'
          isSecureText={false}
          onChangeText={setEmail}
          value={email}
        />

        <CustomTextInput
          title='Password'
          placeholder='Create your password'
          isSecureText={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <View style={styles.signupOptionsContainer}>

        <CustomButton

          buttonText='Sign Up'
          buttonColor='black'
          buttonTextColor='white'
          handleOnPress={() => console.log(name, " ", email, " ", password)}
        />

        <Pressable>
          <Text
            style={{ fontWeight: 'bold', color: 'darkblue'}}
            onPress={() => navigation.navigate('Login')}
          >
          Already have an account? Login Now</Text>
        </Pressable>

      </View>

    </SafeAreaView>
  )
}

export default SignupPage

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },

  signupTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20
  },

  headerContainer: {
    flex: 2,
    justifyContent: 'space-evenly',
  },

  textInputContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  signupOptionsContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }

})