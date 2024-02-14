import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./pages/WelcomeScreen";
import RegisterScreen from "./pages/RegisterScreen";
import MemberResultScreen from "./pages/MemberResultScreen";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MemberResult" component={MemberResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;