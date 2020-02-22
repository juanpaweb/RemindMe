import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../redux/actions";
import { Calendar } from "react-native-calendars";
import moment from "moment";

export const CalendarContainer = () => {
  const dispatch = useDispatch();
  const [today, setToday] = useState(null);

  useEffect(() => {
    setCurrentDay();
  }, []);

  const setCurrentDay = () => {
    const now = new Date();
    const today = moment(now).format("YYYY-MM-DD");

    setToday(today);
  };

  return (
    <Calendar
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        width: "100%",
        backgroundColor: "#3366ff"
      }}
      monthFormat={"MMMM"}
      onDayPress={day => dispatch(allActions.calendarActions.loadBillsForDay())}
      onPressArrowLeft={substractMonth => substractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      markingType={"custom"}
      markedDates={{
        [today]: {
          customStyles: {
            container: {
              backgroundColor: "#ffffff"
            },
            text: {
              color: "#222b45"
            }
          }
        }
      }}
      theme={{
        backgroundColor: "#3366ff",
        calendarBackground: "#3366ff",
        textDayFontFamily: "roboto-light",
        textMonthFontFamily: "roboto-light",
        textDayHeaderFontFamily: "roboto-light",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        todayTextColor: "#ffffff",
        selectedDayBackgroundColor: "#ffffff",
        textSectionTitleColor: "#ffffff",
        dayTextColor: "#ffffff",
        monthTextColor: "#ffffff",
        textDisabledColor: "#222b45",
        arrowColor: "#ffffff",
        "stylesheet.calendar.header": {
          arrow: {
            padding: 0
          },
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
