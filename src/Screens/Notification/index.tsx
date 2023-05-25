import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { Notification } from "./Notification";

export const NotificationContainer = ({
  navigation,
}: NotificationNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Notification onNavigate={onNavigate} />;
};
