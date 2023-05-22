import { i18n, LocalizationKey } from "@/Localization";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Button } from "native-base";
// import { User } from "@/Services";

import { Colors } from "@/Theme/Variables";

export const Login = () => {
//   const { data, isLoading } = props;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    return (
      <View style={styles.container}>
        <Text style={styles.title} >
          {i18n.t(LocalizationKey.LOGIN)}
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder={i18n.t(LocalizationKey.USERNAME)}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder={i18n.t(LocalizationKey.PASSWORD)}
        />
        <Text style={styles.forgotpass} >
          {i18n.t(LocalizationKey.FORGOTPASSWORD)}
        </Text>
        
        <Button style={styles.submitBtn} >
          <Text style={styles.textBtn} >
            {i18n.t(LocalizationKey.LOGIN)}
          </Text>
        </Button>

        {/* Sign up with */}
        <Text style={styles.signupwith} >
            {i18n.t(LocalizationKey.SIGNUPWITH)}
        </Text>
        <View style={styles.otherSignUpContainer}>
          <View style={styles.item}>
            <Image source = {require('../../Assets/logoGoogle.png')} style={styles.logoImg}/>
          </View>
          <View style={styles.item}>
            <Image source = {require('../../Assets/logoFacebook.png')} style={styles.logoImg}/>
          </View>
          <View style={styles.item}>
            <Image source = {require('../../Assets/Frame31.png')} style={styles.logoImg}/>
          </View>
        </View>
  		</View>
    );
};

const styles = StyleSheet.create({

  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 4,
    marginBottom: 20,
    color: Colors.PRIMARY,
  },
  input: {
    height: 50,
    margin: 4,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  forgotpass: {
    margin: 4,
    textAlign: "right",
  },
  submitBtn: {
    backgroundColor: Colors.PRIMARY,
    margin: 4,
    marginVertical: 12,
  },
  textBtn: {
    color: Colors.WHITE,
  },
  signupwith: {
    fontSize: 12,
    margin: 4,
    textAlign: "center",
  },
  otherSignUpContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  item: {
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: "50%",
    backgroundColor: Colors.WHITE
  },
  logo: {
    width: 30,
    height: 30,
  },
  logoImg:{
    height: "100%",
    width: "auto",
    transform: [{scale: (0.8, 0.8)}]
  }
});
