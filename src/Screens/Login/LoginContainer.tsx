// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "@/Navigation";
// import { RootScreens } from "..";
import { i18n, LocalizationKey } from "@/Localization";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Button } from "native-base";
import { User } from "@/Services";

import { Login } from "./Login";
import { Signup } from "./Signup";

import LoginBg from "../../Assets/Login.png"
import SignupBg from "../../Assets/Signup.png"
import { Colors, FontSize } from "@/Theme/Variables";
// type LoginScreenNavigatorProps = NativeStackScreenProps<
//   RootStackParamList,
//   RootScreens.LOGIN
// >;

export const LoginContainer = (value) => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <View style={styles.container}>
      <ImageBackground source={isLogin ? LoginBg : SignupBg} resizeMode="cover" style={styles.container}>
      <View style={styles.logo}>
        {isLogin ?
          <Image source = {require('../../Assets/eBus.png')} style={styles.logoImg}/>
          : <Text style={styles.title}>
            eBus
          </Text>
        }
      </View>

      {isLogin ? 
        <View style={styles.btnContainer}>
          <Button style={styles.activebtn} onPress={() => setIsLogin(true)} >
            <Text style={styles.activetextbtn}>
              {i18n.t(LocalizationKey.LOGIN)}
            </Text>
          </Button>
          <Button style={styles.btn} onPress={() => setIsLogin(false)} >
            <Text style={styles.textbtn}>
              {i18n.t(LocalizationKey.SIGNUP)}
            </Text>
          </Button>
        </View>
      : 
        <View style={styles.btnContainer}>
          <Button style={styles.btn} onPress={() => setIsLogin(true)} >
            <Text style={styles.textbtn}>
              {i18n.t(LocalizationKey.LOGIN)}
            </Text>
          </Button>
          <Button style={styles.activebtn} onPress={() => setIsLogin(false)} >
            <Text style={styles.activetextbtn}>
              {i18n.t(LocalizationKey.SIGNUP)}
            </Text>
          </Button>
        </View>
      }

      <View style={styles.formContainer}>
        {isLogin ? <Login /> : <Signup/>}
      </View>
      </ImageBackground>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoImg:{
    height: "100%",
    width: "auto",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.PRIMARY,
    fontSize: FontSize.LARGE,
    paddingVertical: 30
  },
  btnContainer: {
    flex: 2,
    flexDirection: "row",
    maxHeight: 50,
    maxWidth: "80%",
    backgroundColor: Colors.SECONDARY,
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 12,
  },
  activebtn: {
    width: "45%",
    backgroundColor: Colors.PRIMARY,
    // color: "#FFFFFF",
    minHeight: "75%",
    borderRadius: 100,
    justifyContent: "center",
    margin: 8,
  },
  activetextbtn: {
    textAlign: "center",
  },
  btn: {
    width: "45%",
    backgroundColor: Colors.SECONDARY,
    minHeight: "75%",
    borderRadius: 100,
    justifyContent: "center",
    margin: 8,
  },
  textbtn: {
    color: "#50A458",
    textAlign: "center",
  },
  activetextbtn: {
    textAlign: "center",
    color: Colors.WHITE,
  },
  formContainer: {
    flex: 1,
    backgroundColor: Colors.SECONDARY,
    justifyContent: "center",
    border: "solid 1 #dddddd",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    padding: "5%",
    minWidth: "90%",
    maxHeight: "60%",
    backgroundColor: Colors.TERTIARY,
    borderRadius: 25,
  }
});
