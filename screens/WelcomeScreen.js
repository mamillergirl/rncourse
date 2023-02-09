//import React from 'react';
//import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';



function WelcomeScreen(props) {
    return (
       
       <ImageBackground 
       style={styles.background}
       source={require("../app/assets/background.jpg")}>
        <View style={styles.logoContainter}>
        <Image  style={styles.logo}source={require("../app/assets/logo-red.png")}/>
        <Text>Sell what you don't need.</Text>

        </View>
        <View style={styles.loginButton}>
        </View>
        <View style={styles.registerButton}>

        </View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor:  "#fc5c65",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainter : {
        position: "absolute",
        top: 70,
        alignItems:"center",
    }
})
export default WelcomeScreen;