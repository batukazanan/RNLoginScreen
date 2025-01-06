import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';

import React, { useState } from 'react';
import Loading from './src/components/Loading.js';

export default function App() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/images/user.png')}
        style={styles.userImage}
      />

      <Text style={styles.welcome}>Welcome</Text>

      <Text>Email</Text>
      <TextInput
        inputMode='email'
        placeholder='Enter your email'
        style={styles.TextInputStyle}
        onChangeText={setName}
        value={name}
      />

      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder='Enter your password'
        style={styles.TextInputStyle}
        onChangeText={setLastName}
        value={lastName}
      />

      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [{

          backgroundColor: pressed ? "lightgray" : "lightblue"

        }, styles.button]}>
        <Text>Login</Text>
      </Pressable>

      {isLoading 
      ? 
      <Loading changeIsLoading = {() => setIsLoading(false)} /> 
      : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextInputStyle: {
    borderWidth: 1,
    borderRadius: 7,
    width: '80%',
    height: 40,
    marginVertical: 12,
    textAlign: 'center'

  },

  button: {
    width: "50%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 1
  },

  userImage: {
    width: 100,
    height: 100
  },

  welcome: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20
  }

});
