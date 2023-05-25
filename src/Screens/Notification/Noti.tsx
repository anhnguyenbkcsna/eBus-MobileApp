import React, { useState } from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { Button, FlatList } from 'native-base';
import { Colors } from "@/Theme/Variables";
import { RootScreens } from "..";

export const Noti = (props: {onNavigate: (string: RootScreens) => void}) => {
    const [select, setSelect] = useState()
    const DATA = [
        {
            id: 'Kỷ niệm 48 năm Ngày giải phóng miền Nam 30/4',
            title: 'Chào mừng Ngày giải phóng miền Nam, thống nhất đất nước (30/4/1975-30/4/2023)',
            date: '30/04/2023'
        },
        {
            id: 'Đặt vé thành công',
            title: 'Bạn đã đặt vé thành công tuyến 50 vào ngày 16/04/2023 lúc 14:30',
            date: '15/04/2023'
        },
        {
            id: 'Cập nhật thông tin xe buýt tuyến số 9 cho sinh viên',
            title: 'Bắt đầu từ ngày mai, giá vé của tuyến xe buýt số 9 sẽ giảm còn một nửa cho học sinh sinh viên.',
            date: '04/04/2023'
        },
        {
            id: 'Bạn bỏ quên gì hôm nay?',
            title: 'Bạn có nhớ rằng mình đã quên gì đó hôm nay không? Hãy kiểm tra lại nhé',
            date: '01/04/2023'
        },
        {
            id: 'Nghiên cứu mới cho thấy sự tác động của việc làm việc từ xa đến tình trạng sức khỏe tâm lý của người lao động',
            title: 'Nghiên cứu cho thấy rằng làm việc từ xa có thể gây ra căng thẳng và lo lắng, đặc biệt là...',
            date: '01/04/2023'
        },
        {
            id: 'Đồng hành cùng SEAGAME 23',
            title: 'Hôm nay đội bóng Việt Nam sẽ ra sân với đội hình mạnh nhất đối đầu với Indonesia...',
            date: '01/04/2023'
        },
        {
            id: 'Kẹt xe tại Quốc lộ 51',
            title: 'Hôm nay là một ngày đẹp trời, dòng người đổ xô từ Sài Gòn về Vũng Tàu đi chơi hàng loạt...',
            date: '01/04/2023'
        },        
    ];
    return (
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => 
                <TouchableOpacity 
                    style={styles.listItem} 
                    // onPress={() => props.onNavigate(RootScreens.BUS_BOOKING)}
                    key={index.toString()}
                >
                    <>
                        <Image source={require('../../Assets/Location.png')} style={styles.icon} resizeMode="contain"/>
                        <View style={{padding: 5, maxWidth: '90%'}}>
                            <Text style={styles.mainText}>{item.id}</Text>
                            <Text style={styles.subText}>{item.title}</Text>
                            <Text style={{color: '#AAAAAA'}}>{item.date}</Text>
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