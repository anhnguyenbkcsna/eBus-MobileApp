import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

import { Search } from "./Search";


export const SearchContainer = ({
    navigation,
  }) => {
  
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <Search onNavigate={onNavigate} />;
  
  };

