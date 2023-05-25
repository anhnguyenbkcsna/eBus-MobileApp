import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

import { BusBooking} from "./BusBooking";
import { PickStartPage} from "./PickStartPage";
import { PickEndPage} from "./PickEndPage";
import { PickBuslinePage} from "./PickBuslinePage";
import { TicketInfo } from "./TicketInfo";

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

export const TicketInfoContainer = ({
    navigation,
  }) => {
  
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
  
    return <TicketInfo onNavigate={onNavigate} />;
  
  };




