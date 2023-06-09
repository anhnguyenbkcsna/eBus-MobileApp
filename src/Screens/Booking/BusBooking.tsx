import React, { useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { Button, Modal } from "native-base";
import { Colors, FontSize } from "@/Theme/Variables";
import DatePicker from 'react-native-date-picker'
import { Ionicons } from '@expo/vector-icons';
import { RootScreens } from "..";

import { PickDate } from "./PickDate";
export const BusBooking = (props: {onNavigate: (string: RootScreens) => void; }) => {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    
    const [startPos, setStartPos] = useState('')
    const [endPos, setEndPos] = useState('')
    const [pickedDate, setPickedDate] = useState('')
    const [busline, setBusline] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground
                    source={require('../../../assets/Resources/top_bar.png')}
                    resizeMode="cover"
                    style = {{width: '100%', height: '100%'}}
                >
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center', marginBottom: '-30%'}}>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Đặt vé xe buýt</Text>
                    </View>
                    <View style={{marginLeft: '5%', flex: 1, flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'center' }}>
                        <Ionicons 
                            style={{fontSize: 30, color: 'white'}} name="arrow-back-outline"
                            onPress={() => props.onNavigate(RootScreens.MAIN)}
                        />
                    </View>
                </ImageBackground>  
            </View>

            <View style={styles.form}>
                <TouchableOpacity  
                    style={styles.formElement}
                    onPress={() => props.onNavigate(RootScreens.PICK_START)}
                >
                    <>
                        <Image source={require('../../Assets/Rec.png')} style={styles.logoImg} resizeMode="contain"/>
                        <Text style={styles.formText}>
                            {startPos == '' ? i18n.t(LocalizationKey.CHOOSESTARTPOS) : startPos}
                        </Text>
                    </>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.formElement}
                    onPress={() => props.onNavigate(RootScreens.PICK_END)}
                >
                    <>
                        <Image source={require('../../Assets/Placeholder.png')} style={styles.logoImg} resizeMode="contain"/>
                        <Text style={styles.formText}>
                            {startPos == '' ? i18n.t(LocalizationKey.CHOOSEENDPOS) : endPos}
                        </Text>
                    </>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.formElement}
                    onPress={() => props.onNavigate(RootScreens.PICK_BUSLINE)}
                >
                    <>
                        <Image source={require('../../Assets/Bus.png')} style={styles.logoImg} resizeMode="contain"/>
                        <Text style={styles.formText}>
                            {startPos == '' ? i18n.t(LocalizationKey.CHOOSEBUSLINE) : busline}
                        </Text>
                    </>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => props.onNavigate(RootScreens.TICKET_INFO)}
            >
                <Text style={styles.btnText} >
                    {i18n.t(LocalizationKey.BOOK)}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: Colors.TERTIARY,
    //     flex: 1,
    //     alignItems: "center",
    // },
    container: {
        flex: 1,
        backgroundColor: "#D8ECD9",
        alignItems: 'center',
        // justifyContent: 'center',
      },
      header: {
        flex: 2,
        width: '100%',
        alignContent: 'center',
        maxHeight: '15%',
        paddingTop: 0,
        marginTop: 0,
      },
    bg: {
        justifyContent: "flex-end",
        paddingVertical: '5%',
        width: "100%",
        minHeight: '15%',
    },
    title: {
        textAlign: 'center',
        color: Colors.WHITE,
        fontSize: FontSize.REGULAR,
        fontWeight: "bold",
    },
    topmidTitle: {
        // minHeight: 300,
        width: '100%',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '6%',
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
    },
    btnText: {
        color: Colors.WHITE,
        fontWeight: "bold"
    },
    form: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        minWidth: '90%',
        maxHeight: '30%',
        // alignItems: "left",
        marginVertical: 20,
        paddingTop: 10,
    },
    formElement: {
        flex: 2,
        flexDirection: "row",
        minWidth: '90%',
        paddingVertical: 10,
        // backgroundColor: "red"
    },
    logoImg: {
        height: 25,
        // width: "auto",
    },
    formText: {
        paddingTop: 5
    }
})