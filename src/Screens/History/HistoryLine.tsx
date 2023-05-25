import React, { useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { Button, FlatList } from 'native-base';
import { Colors } from "@/Theme/Variables";
import { RootScreens } from "..";

export const HistoryLine = (props: {onNavigate: (string: RootScreens) => void}) => {
    const [select, setSelect] = useState()
    const DATA = [
        {
          id: 'Tuyến xe buýt số 1',
          title: 'Đi từ trạm A đến trạm B',
          price: '3000đ - 7000đ',
        },
        {
            id: 'Tuyến xe buýt số 2',
            title: 'Đi từ trạm A đến trạm B',
            price: '3000đ - 7000đ',
        },
        {
            id: 'Tuyến xe buýt số 3',
            title: 'Đi từ trạm A đến trạm B',
            price: '3000đ - 7000đ',
        },
        {
            id: 'Tuyến xe buýt số 4',
            title: 'Đi từ trạm A đến trạm B',
            price: '3000đ - 7000đ',
        },
        {
            id: 'Tuyến xe buýt số 5',
            title: 'Đi từ trạm A đến trạm B',
            price: '3000đ - 7000đ',
        },
        {
            id: 'Tuyến xe buýt số 6',
            title: 'Đi từ trạm A đến trạm B',
            price: '3000đ - 7000đ',
        },
        {
            id: 'Tuyến xe buýt số 7',
            title: 'Đi từ trạm A đến trạm B',
            price: '3000đ - 7000đ',
        },
        {
            id: 'Tuyến xe buýt số 8',
            title: 'Đi từ trạm A đến trạm B',
            price: '3000đ - 7000đ',
        },
        {
            id: 'Tuyến xe buýt số 9',
            title: 'Đi từ trạm A đến trạm B',
            price: '3000đ - 7000đ',
        },
    ];
    return (
        <FlatList
            style = {{width: '70%', flexDirection: 'column'}}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => 
                <TouchableOpacity 
                    style={styles.listItem} 
                    key={index}
                >
                    <>
                        <Image source={require('../../Assets/directions_bus.png')} style={styles.icon} resizeMode="contain"/>
                        <View style={{padding: 5}}>
                            <Text style={styles.mainText}>{item.id}</Text>
                            <Text style={styles.subText}>{item.title}</Text>
                            <Text style={styles.priceText}>{item.price}</Text>
                        </View>
                    </>
                </TouchableOpacity>
            }
        />
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: Colors.WHITE,
        minHeight: '10%',
        width: '100%',
    },
    listItem: {
        // flex: 2,
        width: '100%',
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2%',
        marginTop: '2%',
        backgroundColor: 'lightgray'
    },
    icon: {
        width: 30,
        marginHorizontal: 5,
    },
    mainText: {
        color: Colors.PRIMARY,
        fontWeight: 'bold',
    },
    subText: {},
    priceText: {
        color: Colors.PRIMARY,
    }
})