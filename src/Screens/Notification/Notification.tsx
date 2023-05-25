import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextI} from "react-native";
import { Searchbar } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { Ionicons } from '@expo/vector-icons';
import { RootScreens } from "..";
import { Noti } from "./Noti";


export const Notification = (props: {onNavigate: (string: RootScreens) => void; }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <ImageBackground
                source={require('../../../assets/Resources/top_bar.png')}
                resizeMode="cover"
                style = {{width: '100%', height: '100%'}}
            >
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center', marginBottom: '-30%'}}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Thông báo</Text>
                </View>
                <View style={{marginLeft: '5%', flex: 1, flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'center' }}>
                    {/* <Ionicons 
                        style={{fontSize: 30, color: 'white'}} name="arrow-back-outline"
                        onPress={() => props.onNavigate(RootScreens.)}
                    /> */}
                </View>
            </ImageBackground>  
        </View>

        <View style={styles.main}>
            <Noti />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D8ECD9",
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 2,
        width: '100%',
        height: '100%',
        paddingTop: 0,
        marginTop: 0,
    },
    main: {
        flex: 9,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
    },
    
});