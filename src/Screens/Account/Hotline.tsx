import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextI} from "react-native";
import { Searchbar } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { Ionicons } from '@expo/vector-icons';
import { RootScreens } from "..";


export const Hotline = (props: {onNavigate: (string: RootScreens) => void; }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <ImageBackground
            source={require('../../../assets/Resources/top_bar.png')}
            resizeMode="cover"
            style = {{width: '100%', height: '100%'}}
          >
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center', marginBottom: '-30%'}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Tổng đài</Text>
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
          <Text 
            style={{color: 'black', width: '50%', textAlign: 'center', fontSize: 20}}
          >
            Hotline: 1900 1009. 
          </Text>
          <Text 
            style={{color: 'black', width: '70%', textAlign: 'center', fontSize: 20, marginBottom: '5%'}}
          >
            Hãy gọi cho chúng tôi nếu bạn cần trợ giúp.
          </Text>
          <TouchableOpacity 
              style = {{marginBottom: '3%', borderWidth: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#50A458', width: '80%', borderRadius: 5, paddingTop: 15, paddingBottom: 15}}
              onPress={() => props.onNavigate(RootScreens.MAIN)}
          >
              <Text style = {{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Quay lại</Text>
          </TouchableOpacity>
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
    flex: 9,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

});