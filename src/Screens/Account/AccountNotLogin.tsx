import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Searchbar } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { RootScreens } from "..";

export const AccountNotLogin = (props: {onNavigate: (string: RootScreens) => void; }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <ImageBackground
            source={require('../../../assets/Resources/top_bar.png')}
            resizeMode="cover"
            style = {{width: '100%', height: '100%'}}
          >
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center' }}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Tài khoản</Text>
            </View>
          </ImageBackground>  
      </View>

      <View style={styles.user}>
            <View style={{width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    source={require('../../../assets/Resources/3d_avatar_21.png')} 
                    style = {{width: '25%', height: '60%'}}        
                />
            </View>
      </View>

      <View style={styles.grid}>
            <View style={{marginTop: '-7%', marginBottom: '20%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <TouchableOpacity 
                    onPress={() => props.onNavigate(RootScreens.LOGIN)}
                    style = {{borderWidth: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#50A458', width: '80%', borderRadius: 5, paddingTop: 15, paddingBottom: 15}}
                >
                    <Text style = {{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Đăng nhập</Text>
                </TouchableOpacity>
         
            </View>

            <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>

                <TouchableOpacity 
                    style = {{marginBottom: '3%', borderWidth: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '80%', borderRadius: 5, paddingTop: 15, paddingBottom: 15}}
                >
                    <Text style = {{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Cài đặt</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {{marginBottom: '3%', borderWidth: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '80%', borderRadius: 5, paddingTop: 15, paddingBottom: 15}}
                >
                    <Text style = {{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Cập nhật dữ liệu</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {{marginBottom: '3%', borderWidth: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '80%', borderRadius: 5, paddingTop: 15, paddingBottom: 15}}
                >
                    <Text style = {{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Chính sách & bảo mật</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {{marginBottom: '3%', borderWidth: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '80%', borderRadius: 5, paddingTop: 15, paddingBottom: 15}}
                >
                    <Text style = {{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Về chúng tôi</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {{marginBottom: '3%', borderWidth: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '80%', borderRadius: 5, paddingTop: 15, paddingBottom: 15}}
                >
                    <Text style = {{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Đánh giá ứng dụng</Text>
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
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 0,
    marginTop: 0,
  },
  user: {
    flex: 1,
    width: '100%',
    marginTop: '-22%'
  },

  grid: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: '5%'
  }

});
