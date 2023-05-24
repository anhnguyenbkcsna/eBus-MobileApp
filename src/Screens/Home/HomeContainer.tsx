import { Home } from "./Home";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const HomeContainer = ({
  navigation,
}) => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Home onNavigate={onNavigate} />;

};
