import React from "react";
import { SafeAreaView,StyleSheet,Text } from "react-native";

function MemberResultScreen({route}){
    const {user} = route.params;
    return(
        <SafeAreaView>
            <Text style={styles.label} >Üye Adı: {user.userName} </Text>
            <Text style={styles.label} >Üye Soyadı: {user.userSurname} </Text>
            <Text style={styles.label} >Üye Yaşı: {user.userAge} </Text>
            <Text style={styles.label} >Üye Emaili: {user.userEmail} </Text>
            <Text style={styles.label} >Üye Numarası: {user.userPhone} </Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    label:{
        fontWeight:"bold",
        fontSize:20,
        margin:5,
    }
})

export default MemberResultScreen;