import { SET_INTERVAL } from '../action-types/constants';

export const setInterval = payload => {
  return { type: SET_INTERVAL, payload };
};
