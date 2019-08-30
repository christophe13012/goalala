import { SET_INTERVAL } from '../action-types/constants';

const initialState = { interval: 15 };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTERVAL:
      return { ...state, interval: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
