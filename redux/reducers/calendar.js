import {
  GET_BILLS_FOR_DAY,
  TOGGLE_ADD_BILLS,
  IS_LOADING_BILLS_FOR_DAY
} from "../actionTypes";

const initialState = {
  isLoadingBills: false,
  isAddBillsVisible: false
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_BILLS_FOR_DAY:
      return {
        ...state,
        isLoadingBills: true
      };

    case GET_BILLS_FOR_DAY:
      return {
        ...state,
        isLoadingBills: false
      };

    case TOGGLE_ADD_BILLS:
      return {
        ...state,
        isAddBillsVisible: !state.isAddBillsVisible
      };

    default:
      return state;
  }
};

export default calendar;
