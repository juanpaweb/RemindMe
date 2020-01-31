import { TOGGLE_CALENDAR_DETAILS, GET_BILLS_FOR_DAY } from "../actionTypes";

const initialState = {
  showCalendarDetails: false,
  isLoadingBills: true
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case GET_BILLS_FOR_DAY:
      return {
        ...state,
        isLoadingBills: false
      };

    case TOGGLE_CALENDAR_DETAILS:
      return {
        ...state,
        showCalendarDetails: !state.showCalendarDetails
      };

    default:
      return state;
  }
};

export default calendar;
