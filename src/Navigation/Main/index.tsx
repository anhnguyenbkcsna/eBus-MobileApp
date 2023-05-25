import React from "react";

import { HomeContainer } from "@/Screens/Home/HomeContainer";
import { AccountContainer} from "@/Screens/Account";
import { AccountNotLoginContainer} from "@/Screens/Account";

import { StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import { Button } from "native-base";
import {  Icon } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {

  return(
    <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home-outline'
              } else if (route.name === 'Bus') {
                iconName = 'bus-outline';
              } else if (route.name === 'Notification') {
                iconName = 'notifications-outline'
              } else {
                iconName = 'person-outline'
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={'black'} />;
            },
            tabBarStyle: {
              backgroundColor: '#E9EFE9',
              paddingTop: '2%',
              fontSize: 17,
              fontWeight: 'bold',
              width: '100%',
            },
            tabBarActiveTintColor: '#50A458',
            tabBarInactiveTintColor: 'black',
          })}
    >
          <Tab.Screen name="Home" component={HomeContainer} />
          <Tab.Screen name="Bus" component={HomeContainer} />
          <Tab.Screen name="Notification" component={HomeContainer} />
          <Tab.Screen name="Account" component={AccountNotLoginContainer} />
    </Tab.Navigator>
  );
};

// const AlbumsRoute = () => <Text>Albums</Text>;

// const RecentsRoute = () => <Text>Recents</Text>;

// const NotificationsRoute = () => <Text>Notifications</Text>;

// export const MainNavigator = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
//     { key: 'bus', title: 'Bus', focusedIcon: 'bus-marker', unfocusedIcon: 'bus' },
//     { key: 'email', title: 'email', focusedIcon: 'email', unfocusedIcon: 'email-outline' },
//     { key: 'account', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     home: HomeContainer,
//     bus: HomeContainer,
//     email: HomeContainer,
//     account: AccountContainer
//   });

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// };




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


