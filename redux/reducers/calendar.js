import { GET_BILLS_FOR_DAY, TOGGLE_ADD_BILLS } from "../actionTypes";

const initialState = {
  isLoadingBills: true,
  isAddBillsVisible: false
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
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
