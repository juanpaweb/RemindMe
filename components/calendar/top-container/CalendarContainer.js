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
      style={{ paddingLeft: 0, paddingRight: 0, width: "100%" }}
      monthFormat={"MMMM"}
      onDayPress={day =>
        dispatch(allActions.calendarActions.toggleCalendarDetails())
      }
      onPressArrowLeft={substractMonth => substractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      markingType={"custom"}
      markedDates={{
        [today]: {
          customStyles: {
            container: {
              backgroundColor: "#3366ff",
              shadowColor: "#3366ff",
              shadowOffset: {
                width: 0,
                height: 0
              },
              shadowOpacity: 0.45,
              shadowRadius: 8,
              elevation: 9
            },
            text: {
              color: "#fff"
            }
          }
        }
      }}
      theme={{
        textDayFontFamily: "roboto-light",
        textMonthFontFamily: "roboto-light",
        textDayHeaderFontFamily: "roboto-light",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        todayTextColor: "#3366ff",
        selectedDayBackgroundColor: "#3366ff",
        arrowColor: "#3366ff",
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
