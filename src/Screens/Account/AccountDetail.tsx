import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import DatePicker from 'react-native-datepicker';
import { Searchbar } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { Ionicons } from '@expo/vector-icons';
import { RootScreens } from "..";

export const AccountDetail = (props: {onNavigate: (string: RootScreens) => void; }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <ImageBackground
            source={require('../../../assets/Resources/top_bar.png')}
            resizeMode="cover"
            style = {{width: '100%', height: '100%'}}
          >
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center', marginBottom: '-50%'}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Tài khoản</Text>
            </View>
            <View style={{marginLeft: '5%', flex: 1, flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'center' }}>
                <Ionicons 
                    style={{fontSize: 30, color: 'white'}} name="arrow-back-outline"
                    onPress={() => props.onNavigate(RootScreens.ACCOUNT)}
                />
            </View>
          </ImageBackground> 
      </View>

      <View style={styles.user}>
            <View style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    source={require('../../../assets/Resources/3d_avatar_21.png')} 
                    style = {{width: '28%', height: '60%', position: 'relative'}}        
                />
                <Image 
                    source={require('../../../assets/Resources/Edit.png')} 
                    style = {{width: '8%', height: '17%', position: 'absolute', bottom: 30, right: 160}}        
                />
            </View>
            <View style={{marginTop: '-7%', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: '#50A458', fontWeight: 'bold'}}>Phạm Hữu Phú</Text>
            </View>
      </View>

      <View style={styles.grid}>

            <View style={{width: '100%', marginBottom: "5%"}}>
                <View style={{width: '100%', flexDirection: 'flex-start', justifyContent: 'center', marginLeft: 50, marginBottom: '1%'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Họ</Text>
                </View>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput
                        value="Phạm"
                        style={{backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, paddingLeft: 25, borderRadius: 5, width: '80%', fontSize: 16}}
                    />
                </View>
            </View>
            <View style={{width: '100%', marginBottom: "5%"}}>
                <View style={{width: '100%', flexDirection: 'flex-start', justifyContent: 'center', marginLeft: 50, marginBottom: '1%'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Tên</Text>
                </View>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput
                        value="Hữu Phú"
                        style={{backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, paddingLeft: 25, borderRadius: 5, width: '80%', fontSize: 16}}
                    />
                </View>
            </View>
            <View style={{width: '100%', marginBottom: "5%"}}>
                <View style={{width: '100%', flexDirection: 'flex-start', justifyContent: 'center', marginLeft: 50, marginBottom: '1%'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Số điện thoại</Text>
                </View>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput
                        value="(+84)384293966"
                        style={{backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, paddingLeft: 25, borderRadius: 5, width: '80%', fontSize: 16}}
                    />
                </View>
            </View>
            <View style={{width: '100%', marginBottom: "5%"}}>
                <View style={{width: '100%', flexDirection: 'flex-start', justifyContent: 'center', marginLeft: 50, marginBottom: '1%'}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Email</Text>
                </View>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput
                        value="phu.pham@hcmut.edu.vn"
                        style={{backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, paddingLeft: 25, borderRadius: 5, width: '80%', fontSize: 16}}
                    />
                </View>
            </View>
      </View>
      <View style={styles.bottom}>
        <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <TouchableOpacity 
                style = {{borderWidth: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '80%', borderRadius: 5}}
            >
                <Text style = {{padding: 20, color: 'red', fontSize: 15, fontWeight: 'bold'}}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

// export const Home1 = (props: IHomeProps) => {
//   const { data, isLoading } = props;
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       {isLoading ? (
//         <HStack space={2} justifyContent="center">
//           <Spinner accessibilityLabel="Loading posts" />
//           <Heading color="primary.500" fontSize="md">
//             {i18n.t(LocalizationKey.LOADING)}
//           </Heading>
//         </HStack>
//       ) : (
//         <>
//           <Text>{i18n.t(LocalizationKey.HOME)}</Text>
//           <Heading color="primary.500" fontSize="md">
//             {data?.username}
//           </Heading>
//         </>
//       )}
//     </View>
//   );
// };

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
  user: {
    flex: 2,
    width: '100%',
    marginTop: '-22%'
  },

  grid: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: '5%'
  },
  bottom: {
    flex: 1,
    width: '100%'
  }

});
