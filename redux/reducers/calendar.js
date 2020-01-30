import { TOGGLE_CALENDAR_DETAILS } from "../actionTypes";

const initialState = {
  showCalendarDetails: false
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
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
