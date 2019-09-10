import { SET_INTERVAL } from "../action-types/constants";
import { SET_MATCH_ID_FAVORI } from "../action-types/constants";

const initialState = { interval: 30, matchIdFavori: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTERVAL:
      return { ...state, interval: action.payload };
    case SET_MATCH_ID_FAVORI:
      let matchIdFavori = [...state.matchIdFavori];
      if (matchIdFavori.includes(action.payload)) {
        matchIdFavori = matchIdFavori.filter(id => id !== action.payload);
      } else {
        matchIdFavori.push(action.payload);
      }
      return { ...state, matchIdFavori };
    default:
      return state;
  }
};

export default rootReducer;
