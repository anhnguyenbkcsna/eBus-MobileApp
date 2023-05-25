import React, { useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { Button, FlatList } from 'native-base';
import { Colors } from "@/Theme/Variables";
import { RootScreens } from "..";

export const PickBusLine = (props: {onNavigate: (string: RootScreens) => void}) => {
    const [select, setSelect] = useState()
    const DATA = [
        {
          id: 'Tuyến xe buýt số 1',
          title: 'First Item',
          price: '3000đ - 7000đ',
        },
        {
          id: 'Tuyến xe buýt số 2',
          title: 'Second Item',
          price: '5000đ - 10000đ',
        },
        {
          id: 'Tuyến xe buýt số 3',
          title: 'Third Item',
          price: '3000đ - 19000đ',
        },
        {
          id: 'Tuyến xe buýt số 4',
          title: 'Third Item',
          price: '5000đ - 13000đ',
        },
        {
          id: 'Tuyến xe buýt số 5',
          title: 'Third Item',
          price: '7000đ - 12000đ',
        },
        {
          id: 'Tuyến xe buýt số 6',
          title: 'Third Item',
          price: '6000đ - 20000đ',
        },
    ];
    return (
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => 
                <TouchableOpacity 
                    style={styles.listItem} 
                    onPress={() => props.onNavigate(RootScreens.BUS_BOOKING)}
                    key={index.toString()}
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
    subText: {},
    priceText: {
        color: Colors.PRIMARY,
    }
})