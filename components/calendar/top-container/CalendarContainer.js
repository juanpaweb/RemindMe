import React from "react";
import { Calendar } from "react-native-calendars";
import { Icon } from "@ui-kitten/components";

export const LeftArrowIcon = () => {
  <Icon name="arrow-ios-back-outline" {...style} />;
};

export const RightArrowIcon = () => {
  <Icon name="arrow-ios-forward-outline" {...style} />;
};

const CalendarContainer = () => {
  return (
    <Calendar
      style={{ paddingLeft: 0, paddingRight: 0, width: "100%" }}
      onDayPress={day => {
        console.log("selected day", day);
      }}
      onDayLongPress={day => {
        console.log("selected day", day);
      }}
      monthFormat={""}
      onMonthChange={month => {
        console.log("month changed", month);
      }}
      hideArrows={false}
      renderArrow={direction => {
        direction === "left" ? <LeftArrowIcon /> : <RightArrowIcon />;
      }}
      disableMonthChange={true}
      firstDay={1}
      onPressArrowLeft={substractMonth => substractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      theme={{
        textDayFontFamily: "roboto-light",
        textMonthFontFamily: "roboto-light",
        textDayHeaderFontFamily: "roboto-light",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        "stylesheet.calendar.header": {
          week: {
            marginTop: 5,
            flexDirection: "row",
            justifyContent: "space-between"
          }
        }
      }}
    />
  );
};

export default CalendarContainer;
