// In a React Native application
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Parse from "parse/react-native";
import AsyncStorage from '@react-native-community/async-storage';
import keys from './constants/Keys';
import { UserRegistration } from './UserRegistration';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = (keys.serverURL);

const App = () => {

return (
	
    <View>
        <Text style={styles.title}>React Native on Back4App</Text>
        <Text>User registration tutorial</Text>
        <UserRegistration />
    </View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#000",
	  alignItems: "center",
	  justifyContent: "center",
	},
	title: {
	  fontSize: 20,
	  fontWeight: "bold",
	},
  });

export default App;