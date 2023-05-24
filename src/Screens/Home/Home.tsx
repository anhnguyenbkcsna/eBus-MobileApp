import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Searchbar } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { RootScreens } from "..";
import MapView from 'react-native-maps';


export const Home = (props: {onNavigate: (string: RootScreens) => void; }) => {
  const pos = {
		lat: 10.87973,
		long: 106.80594,
		latDelta: 0.001,
		longDelta: 0.02,
	}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <ImageBackground
            source={require('../../../assets/Resources/top_bar.png')}
            resizeMode="cover"
            style = {{width: '100%', height: '100%'}}
          >
            <View style={{marginLeft: 30, width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image 
                source={require('../../../assets/Resources/3d_avatar_21.png')} 
                style = {{width: '14%', height: '33%'}}        
              />

              <View style={{marginLeft: 15}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>Chào, User!</Text>
              </View>
            </View>
          </ImageBackground>  
      </View>

      <View style={styles.map}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: '-7%'}}>
            <Searchbar
              placeholder="Tìm kiếm địa điểm"
              style={{width: '95%', 
                      borderRadius: 10, 
                      backgroundColor: 'white',
                      shadowColor: 'black',
                      shadowOpacity: 0.3,
                      shadowOffset: { width: 0, height: 2 },
                      shadowRadius: 10,
                      elevation: 5}}
            />
          </View>
          <View style={{flex: 3, borderWidth: 1, borderRadius: 15, marginTop: '5%'}}>
            {/* <MapView style={{width: '100%', height: '100%', borderRadius: 15}} /> */}
            <MapView
              style={styles.map}
              showsUserLocation
              region={{
                latitude: pos.lat,
                longitude: pos.long,
                latitudeDelta: pos.latDelta,
                longitudeDelta: pos.longDelta,
              }}
            />
          </View>
      </View>

      <View style={styles.grid}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 

              <TouchableOpacity style = {{backgroundColor: '#50A458', padding: 7, borderRadius: 20}}>
                <Image 
                  source={require('../../../assets/Resources/Pin.png')} 
                  style = {{height: 55, width: 55}}        
                />
              </TouchableOpacity> 

              <View>
                <Text style={{fontWeight: 'bold'}}>Tra cứu</Text>
              </View>
                
            </View>

            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>            
              <TouchableOpacity style = {{backgroundColor: '#50A458', padding: 7, borderRadius: 20}}>
                <Image 
                  source={require('../../../assets/Resources/Maps.png')} 
                  style = {{height: 55, width: 55}}        
                />
              </TouchableOpacity> 

              <View>
                <Text style={{fontWeight: 'bold'}}>Tìm đường</Text>
              </View>                
            </View>

            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>             
              <TouchableOpacity style = {{backgroundColor: '#50A458', padding: 7, borderRadius: 20}}>
                <Image 
                  source={require('../../../assets/Resources/ticket.png')} 
                  style = {{height: 55, width: 55}}        
                />
              </TouchableOpacity> 

              <View>
                <Text style={{fontWeight: 'bold'}}>Đặt vé</Text>
              </View>               
            </View>

            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
            
              <TouchableOpacity style = {{backgroundColor: '#50A458', padding: 7, borderRadius: 20}}>
                <Image 
                  source={require('../../../assets/Resources/Clock.png')} 
                  style = {{height: 55, width: 55}}        
                />
              </TouchableOpacity> 

              <View>
                <Text style={{fontWeight: 'bold'}}>Lịch sử</Text>
              </View>
                
            </View>         
          </View>

          <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 

              <TouchableOpacity style = {{backgroundColor: '#50A458', padding: 7, borderRadius: 20}}>
                <Image 
                  source={require('../../../assets/Resources/Hotline.png')} 
                  style = {{height: 55, width: 55}}        
                />
              </TouchableOpacity> 

              <View>
                <Text style={{fontWeight: 'bold'}}>Tổng đài</Text>
              </View>
                
            </View>

            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>            
              <TouchableOpacity
                 style = {{backgroundColor: '#50A458', padding: 7, borderRadius: 20}}
                 onPress={() => props.onNavigate(RootScreens.REPORT)}
              >
                <Image 
                  
                  source={require('../../../assets/Resources/Fivestars.png')} 
                  style = {{height: 55, width: 55}}        
                />
              </TouchableOpacity> 

              <View>
                <Text style={{fontWeight: 'bold'}}>Góp ý</Text>
              </View>                
            </View>

            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>             
              <TouchableOpacity style = {{backgroundColor: '#50A458', padding: 7, borderRadius: 20}}>
                <Image 
                  source={require('../../../assets/Resources/Gameconsole.png')} 
                  style = {{height: 55, width: 55}}        
                />
              </TouchableOpacity> 

              <View>
                <Text style={{fontWeight: 'bold'}}>Minigame</Text>
              </View>               
            </View>

            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
            
              <TouchableOpacity style = {{backgroundColor: '#50A458', padding: 7, borderRadius: 20}}>
                <Image 
                  source={require('../../../assets/Resources/Sun.png')} 
                  style = {{height: 55, width: 55}}        
                />
              </TouchableOpacity> 

              <View>
                <Text style={{fontWeight: 'bold'}}>Thời tiết</Text>
              </View>
                
            </View>         
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
    backgroundColor: "#fff",
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
  map: {
    flex: 3,

  },

  grid: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    marginTop: '10%'
  }

});
