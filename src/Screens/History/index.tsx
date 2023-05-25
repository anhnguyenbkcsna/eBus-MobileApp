import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { History } from "./History";

type HistoryNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  // RootScreens.ACCOUNT,
  // RootScreens.ACCOUNT_DETAIL,
  // RootScreens.ACCOUNT_NOT_LOGIN,
  // RootScreens.REPORT,
  // RootScreens.REPORT_RESULT
>;

export const HistoryContainer = ({
  navigation,
}: HistoryNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <History onNavigate={onNavigate} />;
};
