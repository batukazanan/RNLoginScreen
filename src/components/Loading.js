import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = (props) => { //! props yerine {name, changeIsLoading} gibi props isimlerini yazarak da kullanabiliriz
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="black"/>
        <Text style={styles.loadingText}>Loading..</Text>

        <Pressable 
            onPress={() => props.changeIsLoading()}
            style= {[{}, 
            styles.closeButtonContainer
        ]}>
            <Text style={styles.closeButton}>X</Text>
        </Pressable>
      
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'tomato',
        alignItems:'center',
        justifyContent: 'center',
    },

    loadingText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20
    },
    closeButtonContainer: {
        backgroundColor: 'black',
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 60,
        right: 30
    },  
    closeButton: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
})