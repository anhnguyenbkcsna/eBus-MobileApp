// import React from "react";
// import { i18n, LocalizationKey } from "@/Localization";
// import { View, Text, StyleSheet } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { Button } from "native-base";
// import { RootScreens } from "..";

// export const Welcome = (props: {
//   onNavigate: (string: RootScreens) => void;
// }) => {
//   return (
//     <View style={styles.container}>
//       <Text>{i18n.t(LocalizationKey.WELCOME)}</Text>
//       <StatusBar style="auto" />
//       <Button onPress={() => props.onNavigate(RootScreens.MAIN)}>
//         {i18n.t(LocalizationKey.START)}
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableHighlight } from 'react-native';
import { RootScreens } from "..";

export const Welcome1 = (props: {onNavigate: (string: RootScreens) => void; }) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 3, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Image 
          source={require('../../../assets/Resources/Logo.png')} 
          style = {{width: '40%', height: '50%'}}        
        /> 
      </View>
      <View style={{flex: 4, width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -20}}>
        <Image 
          source={require('../../../assets/Resources/Group33.png')} 
          style = {{width: '80%', height: '100%'}}        
        /> 
      </View>
      <View style={{flex: 2}}>
        <Text style={{color: 'black', fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginTop: 0, marginBottom: 5, marginLeft: 20, marginRight: 20}}>eBus rất tiện lợi và dễ sử dụng</Text>
        <Text style={{color: 'black', fontSize: 15, textAlign: 'center', marginTop: 0, marginBottom: 0, marginLeft: 40, marginRight: 40}}>Có rất nhiều tính năng để bạn khám phá như đặt vé, thanh toán trực tuyến, minigame, ...</Text>
        <View style={styles.view_circle}>
          <View style={styles.circle}><Text>1</Text></View>
          <View style={styles.circle1}><Text>2</Text></View>
          <View style={styles.circle}><Text>3</Text></View>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
        <TouchableHighlight 
          onPress={() => props.onNavigate(RootScreens.WELCOME2)}
          style = {{borderWidth: 1, flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'center', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', backgroundColor: '#50A458', marginTop: -30, marginBottom: 10, paddingTop: 10, paddingBottom: 10, borderRadius: 10}}
        >
          <Text style = {{color: 'white', fontSize: 15}}>Next</Text>
        </TouchableHighlight>

        <TouchableHighlight 
          onPress={() => props.onNavigate(RootScreens.MAIN)}
          style = {{borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#DEFFDD', width: '80%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 10}}
        >
          <Text style = {{color: '#50A458', fontSize: 15}}>Skip</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEFFDD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view_circle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5
  },

  circle: {
    margin: 10,
    padding: 5,
    borderRadius: 50,
    width: 11,
    height: 11,
    color: '#BCFFBF',
    backgroundColor: '#BCFFBF'
  },

  circle1: {
    margin: 10,
    padding: 5,
    borderRadius: 50,
    width: 11,
    height: 11,
    color: '#50A458',
    backgroundColor: '#50A458'
  },
});
