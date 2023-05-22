import React from "react";

import { HomeContainer } from "@/Screens/Home/HomeContainer";

import { StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import { Button } from "native-base";
import {  Icon } from "@react-native-material/core";

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

export const MainNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'bus', title: 'Bus', focusedIcon: 'bus-marker', unfocusedIcon: 'bus' },
    { key: 'email', title: 'email', focusedIcon: 'email', unfocusedIcon: 'email-outline' },
    { key: 'account', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeContainer,
    bus: AlbumsRoute,
    email: RecentsRoute,
    account: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


