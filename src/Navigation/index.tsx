import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer, Welcome1Container, Welcome2Container } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
import { LoginContainer } from "@/Screens/Login";
import { AccountContainer, AccountNotLoginContainer, AccountDetailContainer, ReportContainer, ReportResultContainer } from "@/Screens/Account";
import { PickStartContainer, PickEndContainer, PickBuslineContainer, BusBookingContainer} from "@/Screens/Booking";
import { HomeContainer } from "@/Screens/Home";
import { RouteContainer } from "@/Screens/Route";
import { PickStartPage } from "@/Screens/Booking/PickStartPage";
import { BusBooking } from "@/Screens/Booking/BusBooking";

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
  [RootScreens.ROUTE]: undefined;
  [RootScreens.PICK_END]: undefined;
  [RootScreens.PICK_START]: undefined;
  [RootScreens.PICK_BUSLINE]: undefined;
  [RootScreens.BUS_BOOKING]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.PICK_START}
          component={BusBooking}
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

        <RootStack.Screen
          name={RootScreens.ROUTE}
          component={RouteContainer}
        />

        {/* <RootStack.Screen
          name={RootScreens.PICK_END}
          component={PickEndContainer}
        />

        <RootStack.Screen
          name={RootScreens.PICK_BUSLINE}
          component={PickBuslineContainer}
        />  

        <RootStack.Screen
          name={RootScreens.BUS_BOOKING}
          component={BusBookingContainer}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
