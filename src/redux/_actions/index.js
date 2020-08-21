import { dateTypes } from '../_constants.js';

export function setFirstDate(getDate) {
    console.log("Set date is called", getDate);
  return { type: dateTypes.SET_FIRST_DATE, date: getDate };
}
