import React from "react";
import { Calendar } from "react-native-calendars";

const CalendarContainer = ({ ...props }) => {
  return (
    <Calendar
      style={{ paddingLeft: 0, paddingRight: 0, width: "100%" }}
      monthFormat={"MMMM"}
      onDayPress={day => {
        props.toggleDetails();
      }}
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
