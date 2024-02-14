import React from "react";
import { SafeAreaView,Text, StyleSheet} from "react-native";

import Button from "../components/Button";

function WelcomeScreen({navigation}){

     function goToRegisterScreen(){
          navigation.navigate('Register');
     }

     return(
          <SafeAreaView style={styles.container}> 
               <Text style={styles.header}>Fitness App</Text>
               <Button text={"Üye Kaydı Oluştur"} onPress={goToRegisterScreen} />
          </SafeAreaView>
     );
}

export default WelcomeScreen;

const styles=StyleSheet.create({
     container:{
          flex:1,
          justifyContent:"center",
     },
     header:{
          textAlign:"center",
          fontSize:30,
          fontWeight:"bold",
          margin:10,
     }
});