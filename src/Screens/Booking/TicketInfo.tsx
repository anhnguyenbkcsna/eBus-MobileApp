import React, { useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground } from "react-native";

import { Colors, FontSize } from "@/Theme/Variables";
import { Button } from "native-base";
// import { TopMidTitle } from "@/Components";

export const TicketInfo = () => {
    const [startPos, setStartPos] = useState('Chỗ này')
    const [endPos, setEndPos] = useState('chưa có')
    const [date, setDate] = useState('sửa lại')
    const [busline, setBusline] = useState('dữ liệu')

    return (
        <View style={styles.container}>
            <View style={styles.topmidTitle}>
                <ImageBackground source={require('../../Assets/Top-bg.png')} resizeMode="cover" style={styles.bg}>
                    <Text style={styles.title}>Đặt vé xe buýt</Text>
                </ImageBackground>
            </View>

            <View style={styles.form}>
                <Text>{i18n.t(LocalizationKey.TICKETINFO)}</Text>
                <View style={styles.formElement}>
                    <Text>
                        <Image source={require('../../Assets/Rec.png')} style={styles.logoImg} resizeMode="contain"/>
                        {startPos == '' ? i18n.t(LocalizationKey.CHOOSESTARTPOS) : startPos}
                    </Text>
                </View>
                <View style={styles.formElement}>
                    <Text>
                        <Image source={require('../../Assets/Placeholder.png')} style={styles.logoImg} resizeMode="contain"/>
                        {startPos == '' ? i18n.t(LocalizationKey.CHOOSEENDPOS) : endPos}
                    </Text>
                </View>
                <View style={styles.formElement}>
                    <Text>
                        <Image source={require('../../Assets/Schedule.png')} style={styles.logoImg} resizeMode="contain"/>
                        {startPos == '' ? i18n.t(LocalizationKey.CHOOSEDATE) : date}
                    </Text>
                </View>
                <View style={styles.formElement}>
                    <Text>
                        <Image source={require('../../Assets/Bus.png')} style={styles.logoImg} resizeMode="contain"/>
                        {startPos == '' ? i18n.t(LocalizationKey.CHOOSEBUSLINE) : busline}
                    </Text>
                </View>
            </View>
            <Button style={styles.btn}>
                <Text style={styles.btnText}>{i18n.t(LocalizationKey.BOOK)}</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.TERTIARY,
        flex: 1,
        height: "100%",
        alignItems: "center",
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
        textAlign: "center",
        width: '50%',
        height: '6%',
        backgroundColor: Colors.PRIMARY,
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
        maxHeight: '35%',
        alignItems: "left",
        marginVertical: 20,
        textAlign: 'center',
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
    }
})