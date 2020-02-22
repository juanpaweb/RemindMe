import {
  GET_BILLS_FOR_DAY,
  TOGGLE_ADD_BILLS,
  IS_LOADING_BILLS_FOR_DAY
} from "../actionTypes";

const loadBillsForDay = () => {
  return dispatch => {
    dispatch(isLoadingBillsForDay());

    setTimeout(() => {
      dispatch(getBillsForDay());
    }, 2500);
  };
};

const getBillsForDay = () => {
  return {
    type: GET_BILLS_FOR_DAY
  };
};

const isLoadingBillsForDay = () => {
  return {
    type: IS_LOADING_BILLS_FOR_DAY
  };
};

const toggleAddBills = () => {
  return {
    type: TOGGLE_ADD_BILLS
  };
};

export default {
  loadBillsForDay,
  toggleAddBills
};
