import React, { useState, useEffect } from "react";
import { Animated, View } from "react-native";
import { useSelector } from "react-redux";
import TopContainer from "./top-container/TopContainer";
import BottomContainer from "./bottom-container/BottomContainer";

const CalendarMain = () => {
  const calendar = useSelector(state => state.calendar);

  return (
    <>
      <TopContainer />
      <BottomContainer />
    </>
  );
};

export default CalendarMain;
