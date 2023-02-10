
import { ImageBackground, View, StyleSheet, Image, Text,Button, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



function WelcomeScreen({navigation}) {
  return (
     
     <ImageBackground 
     style={styles.background}
     source={require("./app/assets/interior.jpeg")}>
      <View style={styles.logoContainter}>
      <Image  style={styles.logo} source={require("./app/assets/logo-red.png")}/>
      <Text style={styles.topText}>Discover a new style</Text>

      </View>
      
      <View style={styles.navButton}>
      <Pressable  style={styles.button} onPress={() => navigation.navigate('Details')}>
      <Text style={styles.topText}>Discover</Text>
    </Pressable>
      
      </View>
      
     </ImageBackground>
  );
}



const Stack = createNativeStackNavigator();



function ViewImageScreen({navigation}) {

  return (
      <View >
           
          <View style={styles.closeIcon}><Button title="Hate"/></View>
          <View style={styles.likeIcon}><Button title="Love" onPress={() => console.log('button pressed')}/></View>
          
          <Image resizeMode="contain"
          style={styles.image}source={require("./app/assets/vase.png")}/>
         
          
          
          
      </View>

      
  );
}

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Details" component={ViewImageScreen} />
    </Stack.Navigator>
  </NavigationContainer>
     

 
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
},
navButton: {
    width: '100%',
    height: 140,
    backgroundColor:  "#95A78D",
},

logo: {
    width: 70,
    height: 70,

},
logoContainter : {
    position: "absolute",
    top: 30,
    alignItems:"center",
    justifyContent:"center"
},
closeIcon: {
  width: 70,
  height: 50,
  backgroundColor:  "#fc5c65",
  position:"absolute",
  top: 40,
  left: 30,

},
container: {
  backgroundColor: "black",
  flex: 1,
},
likeIcon: {
  width: 70,
  height: 50,
  backgroundColor: "#4ecdc4",
  position:"absolute",
  top: 40,
  right: 30,

},
image: {
  width: "100%",
  height: "100%",

},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  top: 40,
  borderRadius: 4,
  elevation: 3,

},
text: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
},
topText: {
  fontSize: 25,
  lineHeight: 21,
  fontWeight: 'bold',
  padding: 10,
},


});

