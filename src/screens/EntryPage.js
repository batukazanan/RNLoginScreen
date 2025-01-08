import { StyleSheet, View, Image } from 'react-native'
import { CustomButton } from '../components'
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

                <CustomButton
                    buttonText='Login'
                    handleOnPress={() => navigation.navigate('Login')}
                    buttonColor={'black'}
                    buttonTextColor={'white'}
                />

                <CustomButton
                    buttonText='Sign Up'
                    handleOnPress={() => navigation.navigate('SignUp')}
                    buttonColor={'white'}
                    buttonTextColor={'black'}

                />

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

})