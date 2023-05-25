import React from "react";
import { Account} from "./Account";
import { AccountDetail} from "./AccountDetail";
import { AccountNotLogin} from "./AccountNotLogin";
import { Report} from "./Report";
import { ReportResult} from "./ReportResult";
import { Hotline} from "./Hotline";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

type AccountNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ACCOUNT,
  RootScreens.ACCOUNT_DETAIL,
  RootScreens.ACCOUNT_NOT_LOGIN,
  RootScreens.REPORT,
  RootScreens.REPORT_RESULT
>;

export const AccountContainer = ({
  navigation,
}: AccountNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Account onNavigate={onNavigate} />;
};

export const AccountDetailContainer = ({
  navigation,
}: AccountNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <AccountDetail onNavigate={onNavigate} />;
};

export const AccountNotLoginContainer = ({
  navigation,
}: AccountNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <AccountNotLogin onNavigate={onNavigate} />;
};

export const ReportContainer = ({
  navigation,
}: AccountNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Report onNavigate={onNavigate} />;
};

export const ReportResultContainer = ({
  navigation,
}: AccountNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <ReportResult onNavigate={onNavigate} />;
};

export const HotlineContainer = ({
  navigation,
}: AccountNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Hotline onNavigate={onNavigate} />;
};
