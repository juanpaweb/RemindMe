import { TOGGLE_CALENDAR_DETAILS, GET_BILLS_FOR_DAY } from "../actionTypes";

const getBillsForCurrentDay = () => {
  return {
    type: GET_BILLS_FOR_DAY
  };
};

const toggleCalendarDetails = () => {
  return {
    type: TOGGLE_CALENDAR_DETAILS
  };
};

export default {
  getBillsForCurrentDay,
  toggleCalendarDetails
};
