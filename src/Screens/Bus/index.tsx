import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

import { Bus } from "./Bus";


export const BusContainer = ({
    navigation,
  }) => {
  
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <Bus onNavigate={onNavigate} />;
  
  };

