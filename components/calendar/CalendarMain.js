import React from "react";
import { useSelector } from "react-redux";
import TopContainer from "./top-container/TopContainer";
import BottomContainer from "./bottom-container/BottomContainer";

const CalendarMain = () => {
  const calendar = useSelector(state => state.calendar);

  return (
    <>
      <TopContainer />
      {calendar.showCalendarDetails ? <BottomContainer /> : null}
    </>
  );
};

export default CalendarMain;
