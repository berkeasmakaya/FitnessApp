import React, { useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

function RegisterScreen ({navigation}){
    
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPhone, setUserPhone] = useState(null);
    
    function handleSubmit(){
        if (!userName||!userSurname||!userAge||!userEmail||!userPhone){
            Alert.alert("Fitness App", "Bilgiler Boş Bırakılamaz.")
        } 

        const user = {
            userName,
            userSurname,
            userAge,
            userEmail,
            userPhone
        };

        navigation.navigate("MemberResult", {user});
    }

    return(
        <SafeAreaView>
            <Input label="Adınız" placeholder="Adınız..." onChangeText={setUserName}/>
            <Input label="Soyadınız" placeholder="Soyisminiz..."  onChangeText={setUserSurname}/>
            <Input label="Yaşınız" placeholder="Yaşınız..."  onChangeText={setUserAge}/>
            <Input label="E-Mail" placeholder="E-Mailiniz..."  onChangeText={setUserEmail}/>
            <Input label="Telefon Numarası" placeholder="Telefon Numaranız..." onChangeText={setUserPhone} keyboardType={"numeric"}/>
            <Button text={"Kaydı Oluştur"} onPress={handleSubmit} />
        </SafeAreaView>
    );
}

export default RegisterScreen;