import React, { useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { Button, FlatList } from 'native-base';

import { Colors, FontSize } from "@/Theme/Variables";
import ListItem from "react-native-paper/lib/typescript/src/components/List/ListItem";

import { Ionicons } from '@expo/vector-icons';
import { PickStart } from "./PickStart";
import { PickEnd } from "./PickEnd";
import { PickBusLine } from "./PickBusLine";
import { RootScreens } from "..";

export const PickBuslinePage = (props: {onNavigate: (string: RootScreens) => void; }) => {
    
    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.topmidTitle}>
                <ImageBackground source={require('../../Assets/Top-bg.png')} resizeMode="cover" style={styles.bg}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{marginLeft: '5%', justifyContent: 'flex-start'}}>
                            <Ionicons 
                                style={{fontSize: 30, color: 'white'}} name="arrow-back-outline"
                                onPress={() => props.onNavigate(RootScreens.BUS_BOOKING)}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Chọn tuyến xe buýt</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setSearch}
                            value={search}
                            placeholder= {'Nhập chuyến xe cần tìm'}
                        />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.list}>
                <PickBusLine onNavigate={props.onNavigate}/>
            </View>
        </View>
    )
}

// export const PickEndContainer = () => {
    
//     const [search, setSearch] = useState('')
//     const [select, setSelect] = useState('')
//     return (
//         <View style={styles.container}>
//             <View style={styles.topmidTitle}>
//                 <ImageBackground source={require('../../Assets/Top-bg.png')} resizeMode="cover" style={styles.bg}>
//                     <Text style={styles.title}>Chọn trạm muốn đến</Text>
//                     <TextInput
//                         style={styles.input}
//                         onChangeText={setSearch}
//                         value={search}
//                         placeholder= {'Nhập trạm cần tìm'}
//                     />
//                 </ImageBackground>
//             </View>

//             <View style={styles.list}>
//                 <PickBusLine />
//             </View>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.TERTIARY,
        flex: 1,
        height: "100%",
        alignItems: "center",
    },
    bg: {
        justifyContent: "flex-end",
        paddingVertical: '3%',
        width: "100%",
        minHeight: '20%',
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
    input: {
        marginTop: 5,
        backgroundColor: Colors.WHITE,
        width: '90%',
        height: 40,
        borderRadius: 10,
        padding: 10,
    },
    list: {
        backgroundColor: Colors.WHITE,
        minHeight: '10%',
        width: '100%',
    },
    listItem: {
        // flex: 2,
        flexDirection: 'row',
        padding: 10,
        textAlign: 'center'
    },
    icon: {
        width: 30,
        marginHorizontal: 5,
    },
    mainText: {
        color: Colors.PRIMARY,
        fontWeight: 'bold',
    },
    subText: {

    }
})