import React from "react";
import { PickStartPage} from "./PickStartPage";
import { PickEndPage} from "./PickEndPage";
import { PickBuslinePage} from "./PickBuslinePage";
import { BusBooking} from "./BusBooking";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

export const PickStartContainer = ({
    navigation,
  }) => {
  
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <PickStartPage onNavigate={onNavigate} />;
  
  };

export const PickEndContainer = ({
    navigation,
  }) => {
  
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <PickEndPage onNavigate={onNavigate} />;
  
  };

export const PickBuslineContainer = ({
    navigation,
  }) => {
  
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <PickBuslinePage onNavigate={onNavigate} />;
  
};

export const BusBookingContainer = ({
    navigation,
  }) => {
  
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <BusBooking onNavigate={onNavigate} />;
  
  };



