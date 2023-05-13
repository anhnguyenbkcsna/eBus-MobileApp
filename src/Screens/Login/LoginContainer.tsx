// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "@/Navigation";
// import { RootScreens } from "..";
import { i18n, LocalizationKey } from "@/Localization";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Button } from "native-base";
import { User } from "@/Services";

import { Login } from "./Login";
import { Signup } from "./Signup";

// type LoginScreenNavigatorProps = NativeStackScreenProps<
//   RootStackParamList,
//   RootScreens.LOGIN
// >;

export const LoginContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSetLogin = () => {
    if(isLogin){
      setIsLogin(false)
    }
    else setIsLogin(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source = {require('../../Assets/logo.png')} />
      </View>

      {isLogin ? 
        <View style={styles.btnContainer}>
          <Button style={styles.activebtn} onPress={handleSetLogin} >
            <Text style={styles.textbtn}>
              {i18n.t(LocalizationKey.LOGIN)}
            </Text>
          </Button>
          <Button style={styles.btn} onPress={handleSetLogin} >
            <Text style={styles.textbtn}>
              {i18n.t(LocalizationKey.SIGNUP)}
            </Text>
          </Button>
        </View>
      : 
        <View style={styles.btnContainer}>
          <Button style={styles.btn} onPress={handleSetLogin} >
            <Text style={styles.textbtn}>
              {i18n.t(LocalizationKey.LOGIN)}
            </Text>
          </Button>
          <Button style={styles.activebtn} onPress={handleSetLogin} >
            <Text style={styles.textbtn}>
              {i18n.t(LocalizationKey.SIGNUP)}
            </Text>
          </Button>
        </View>
      }

      <View style={styles.formContainer}>
        {isLogin ? <Login /> : <Signup/>}
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 2,
    flexDirection: "row",
    maxHeight: 50,
    maxWidth: "80%",
    backgroundColor: "#BCFFBF",
    borderRadius: 100,
    alignItems: "center",
    margin: 12,
  },
  activebtn: {
    width: "45%",
    backgroundColor: "#50A458",
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
    backgroundColor: "#BCFFBF",
    minHeight: "75%",
    borderRadius: 100,
    justifyContent: "center",
    margin: 8,
  },
  textbtn: {
    textAlign: "center",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#BCFFBF",
    justifyContent: "center",
    border: "solid 1 #dddddd",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    padding: "5%",
    minWidth: "90%",
    maxHeight: "60%",
    backgroundColor: "#DEFFDD",
    borderRadius: "25px",
  }
});
