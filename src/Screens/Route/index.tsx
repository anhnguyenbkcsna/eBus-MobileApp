import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import {Route} from './Route';
import { RootScreens } from "..";

export const RouteContainer = ({
    navigation,
  }) => {
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <Route onNavigate={onNavigate} />;
};