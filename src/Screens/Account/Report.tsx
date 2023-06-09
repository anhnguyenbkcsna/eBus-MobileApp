import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TouchableHighlight} from "react-native";
import {Box, TextArea} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { RootScreens } from "..";


export const Report = (props: {onNavigate: (string: RootScreens) => void; }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.header}>
          <ImageBackground
            source={require('../../../assets/Resources/top_bar.png')}
            resizeMode="cover"
            style = {{width: '100%', height: '100%'}}
          >
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center', marginBottom: '-30%'}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Góp ý</Text>
            </View>
            <View style={{marginLeft: '5%', flex: 1, flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'center' }}>
                <Ionicons 
                    style={{fontSize: 30, color: 'white'}} name="arrow-back-outline"
                    onPress={() => props.onNavigate(RootScreens.MAIN)}
                />
            </View>
          </ImageBackground>  
      </View>

      <View style={styles.user}>
            <TextArea h = '130%' w='90%' placeholder="Nhập nội dung góp ý tại đây!" style={{fontSize: 15, borderRadius: 5,borderWidth: 0, backgroundColor: 'white', width: '100%', height: '100%'}}/>
      </View>

      <View style={styles.grid}>
            <Text style={{color: '#646464', width: '80%', fontSize: 13, marginBottom: '5%'}}>Chúng tôi sẽ xem xét và xử lý góp ý của bạn và trả lời bạn sớm nhất có thể. Những góp ý của bạn sẽ giúp chúng tôi cải thiện chất lượng dịch vụ của mình. Xin chân thành cảm ơn!</Text>
            <TouchableOpacity 
                onPress={() => props.onNavigate(RootScreens.REPORT_RESULT)}
                style = {{marginBottom: '3%', borderWidth: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#50A458', width: '80%', borderRadius: 5, paddingTop: 15, paddingBottom: 15}}
            >
                <Text style = {{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Gửi</Text>
            </TouchableOpacity>
        </View>
    </View>
    </TouchableWithoutFeedback>
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
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 0,
    marginTop: 0,
  },
  user: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },

  grid: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: '10%',
    alignItems: 'center',
    width: '100%',
    marginTop: '5%'
  }

});