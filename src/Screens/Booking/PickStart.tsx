import React, { useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { Button, FlatList } from 'native-base';
import { Colors } from "@/Theme/Variables";

export const PickStart = () => {
    const [select, setSelect] = useState()
    const DATA = [
        {
          id: 'KTX Khu A',
          title: 'First Item',
        },
        {
          id: 'KTX Khu B',
          title: 'Second Item',
        },
        {
          id: 'KTX Khu C',
          title: 'Third Item',
        },
    ];
    return (
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => 
                <TouchableOpacity 
                    style={styles.listItem} 
                    onPress={() => setSelect(item.id)}
                    key={index.toString()}
                >
                    <>
                        <Image source={require('../../Assets/Location.png')} style={styles.icon} resizeMode="contain"/>
                        <View style={{padding: 5}}>
                            <Text style={styles.mainText}>{item.id}</Text>
                            <Text style={styles.subText}>{item.title}</Text>
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
    subText: {

    }
})