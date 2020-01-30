import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../../redux/actions";
import { Calendar } from "react-native-calendars";

const CalendarContainer = () => {
  const dispatch = useDispatch();

  return (
    <Calendar
      style={{ paddingLeft: 0, paddingRight: 0, width: "100%" }}
      monthFormat={"MMMM"}
      onDayPress={day =>
        dispatch(allActions.calendarActions.toggleCalendarDetails())
      }
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
