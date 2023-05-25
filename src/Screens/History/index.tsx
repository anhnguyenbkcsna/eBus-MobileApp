import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

import { History } from "./History";


export const HistoryContainer = ({
    navigation,
  }) => {
  
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <History onNavigate={onNavigate} />;
  
  };

