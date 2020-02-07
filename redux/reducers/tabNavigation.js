import { SET_SELECTED_TAB } from "../actionTypes";

const tabNavigation = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        selectedTab: action.payload
      };

    default:
      return state;
  }
};

export default tabNavigation;
