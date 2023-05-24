import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer, Welcome1Container, Welcome2Container } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
import { LoginContainer } from "@/Screens/Login";
import { PickContainer } from "@/Screens/Booking";
import { AccountContainer, AccountNotLoginContainer, AccountDetailContainer, ReportContainer, ReportResultContainer } from "@/Screens/Account";
import { HomeContainer } from "@/Screens/Home";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.WELCOME1]: undefined;
  [RootScreens.WELCOME2]: undefined;
  [RootScreens.LOGIN]: undefined;
  [RootScreens.ACCOUNT]: undefined;
  [RootScreens.ACCOUNT_NOT_LOGIN]: undefined;
  [RootScreens.ACCOUNT_DETAIL]: undefined;
  [RootScreens.REPORT]: undefined;
  [RootScreens.REPORT_RESULT]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.BOOKING}
          component={PickContainer}
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.WELCOME1}
          component={Welcome1Container}
        />
        <RootStack.Screen
          name={RootScreens.WELCOME2}
          component={Welcome2Container}
        />
        <RootStack.Screen
          name={RootScreens.LOGIN}
          component={LoginContainer}
        />
        <RootStack.Screen
          name={RootScreens.REPORT}
          component={ReportContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
        />
        <RootStack.Screen
          name={RootScreens.ACCOUNT_DETAIL}
          component={AccountDetailContainer}
        />
        
        <RootStack.Screen
          name={RootScreens.REPORT_RESULT}
          component={ReportResultContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
