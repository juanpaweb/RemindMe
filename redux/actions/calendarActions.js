import { GET_BILLS_FOR_DAY, TOGGLE_ADD_BILLS } from "../actionTypes";

const getBillsForCurrentDay = () => {
  return {
    type: GET_BILLS_FOR_DAY
  };
};

const toggleAddBills = () => {
  return {
    type: TOGGLE_ADD_BILLS
  };
};

export default {
  getBillsForCurrentDay,
  toggleAddBills
};
