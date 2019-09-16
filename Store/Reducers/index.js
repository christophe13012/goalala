import { SET_INTERVAL, TOGGLE_COMPETITIONS } from "../action-types/constants";
import { SET_MATCH_ID_FAVORI } from "../action-types/constants";

const initialState = { interval: 30, matchIdFavori: [], competitions: [] };

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
    case TOGGLE_COMPETITIONS:
      let competitions = [...state.competitions];
      if (competitions.includes(action.payload[0])) {
        competitions = competitions.filter(
          compet => !action.payload.includes(compet)
        );
      } else {
        competitions = [...competitions, ...action.payload];
      }
      return { ...state, competitions };
    default:
      return state;
  }
};

export default rootReducer;
