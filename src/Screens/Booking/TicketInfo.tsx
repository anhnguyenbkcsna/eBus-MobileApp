import React, { useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { Button, Modal } from 'native-base';
import { Colors, FontSize } from "@/Theme/Variables";
import DatePicker from 'react-native-date-picker'
import { RadioButton } from 'react-native-paper';

import { PickDate } from "./PickDate";
export const TicketInfo = () => {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    const [checked, setChecked] = React.useState('momo');
    const payment = ['momo', 'other']
    
    const [startPos, setStartPos] = useState('')
    const [endPos, setEndPos] = useState('')
    const [pickedDate, setPickedDate] = useState('')
    const [busline, setBusline] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.topmidTitle}>
                <ImageBackground source={require('../../Assets/Top-bg.png')} resizeMode="cover" style={styles.bg}>
                    <Text style={styles.title}>Xác nhận thông tin vé</Text>
                </ImageBackground>
            </View>

            <View style={styles.form}>
                <Text style={styles.subtitle}>
                    Thông tin vé xe buýt
                </Text>
                <TouchableOpacity  style={styles.formElement}>
                    <Image source={require('../../Assets/Rec.png')} style={styles.logoImg} resizeMode="contain"/>
                    <Text style={styles.formText}>
                        {startPos == '' ? i18n.t(LocalizationKey.CHOOSESTARTPOS) : startPos}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.formElement}>
                    <Image source={require('../../Assets/Placeholder.png')} style={styles.logoImg} resizeMode="contain"/>
                    <Text style={styles.formText}>
                        {startPos == '' ? i18n.t(LocalizationKey.CHOOSEENDPOS) : endPos}
                    </Text>
                </TouchableOpacity>

                {/* <Button onPress={() => setOpen(true)} > */}
                <TouchableOpacity style={styles.formElement} onPress={() => setOpen(true)} >
                    <Image source={require('../../Assets/Schedule.png')} style={styles.logoImg} resizeMode="contain"/>
                    <Text style={styles.formText}>
                        {startPos == '' ? i18n.t(LocalizationKey.CHOOSEDATE) : pickedDate}
                    </Text>
                </TouchableOpacity>

                {/* <Modal animationType='slide' transparent={true} visible={open}>
                    <View>
                        <DatePicker modal open={open} date={date} display="inline"/>
                    </View>
                </Modal> */}
                {/* </Button> */}

                <TouchableOpacity  style={styles.formElement}>
                    <Image source={require('../../Assets/Bus.png')} style={styles.logoImg} resizeMode="contain"/>
                    <Text style={styles.formText}>
                        {startPos == '' ? i18n.t(LocalizationKey.CHOOSEBUSLINE) : busline}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.form2}>
                <Text style={styles.subtitle}>
                    Chọn hình thức thanh toán
                </Text>
                {payment.map((ele) => <TouchableOpacity style={styles.formElement} onPress={() => setChecked(ele)}>
                    <RadioButton
                        color={Colors.PRIMARY}
                        value= {ele == "momo" ? "Momo" : i18n.t(LocalizationKey.OTHERPAYMENT)}
                        status={ checked === ele ? 'checked' : 'unchecked' }
                    />
                    <Text style={styles.formText}>
                        {ele == "momo" ? "Momo" : i18n.t(LocalizationKey.OTHERPAYMENT)}
                    </Text>
                </TouchableOpacity>)}
            </View>
            <Button style={styles.btn}>
                <Text style={styles.btnText}>{i18n.t(LocalizationKey.PAY)}</Text>
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
    subtitle: {
        fontSize: FontSize.SMALL,
        textAlign: 'center',
        margin: 5,
        fontWeight: 'bold',
        color: Colors.PRIMARY
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
        maxHeight: '40%',
        marginVertical: 20,
    },
    form2: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        minWidth: '90%',
        maxHeight: '20%',
        marginBottom: 20,
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