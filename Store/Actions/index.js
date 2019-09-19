import {
  SET_INTERVAL,
  TOGGLE_COMPETITIONS,
  MATCHES_API,
  SET_MATCH_ID_FAVORI
} from "../action-types/constants";

export const setInterval = payload => {
  return { type: SET_INTERVAL, payload };
};

export const setmatchIdFavori = payload => {
  return { type: SET_MATCH_ID_FAVORI, payload };
};

export const toggleCompetitions = payload => {
  return { type: TOGGLE_COMPETITIONS, payload };
};

export const saveMatchesAPI = payload => {
  return { type: MATCHES_API, payload };
};
