import { SET_INTERVAL, TOGGLE_COMPETITIONS } from "../action-types/constants";
import { SET_MATCH_ID_FAVORI } from "../action-types/constants";

export const setInterval = payload => {
  return { type: SET_INTERVAL, payload };
};

export const setmatchIdFavori = payload => {
  return { type: SET_MATCH_ID_FAVORI, payload };
};

export const toggleCompetitions = payload => {
  return { type: TOGGLE_COMPETITIONS, payload };
};
