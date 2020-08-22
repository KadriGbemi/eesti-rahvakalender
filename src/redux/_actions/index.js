import { dateTypes } from '../_constants.js';
const getOneDay = 1000 * 3600 * 24;

export function setDates(dateInput) {
  return function (dispatch) {
    dispatch(setFirstDate(dateInput));
    dispatch(setStartDateOfWeek(dateInput));
    dispatch(setEndDateOfWeek(dateInput));
  };
}
export function setFirstDate(dateInput) {
  return { type: dateTypes.SET_FIRST_DATE, date: dateInput };
}

export function updateFirstDate(dateInput, type) {
  const getFirstDate =
    type === 'Previous'
      ? dateInput.valueOf() - getOneDay * 7
      : dateInput.valueOf() + getOneDay * 7;
  return function (dispatch) {
    dispatch(setDates(new Date(getFirstDate)));
  };
}

export function setStartDateOfWeek(dateInput) {
  const startDateOfWeek = dateInput.valueOf() - getOneDay * dateInput.getDay();
  return { type: dateTypes.SET_START_DATE_OF_WEEK, date: startDateOfWeek };
}

export function setEndDateOfWeek(dateInput) {
  const getEndDay = 6 - dateInput.getDay();
  const endDateOfWeek = dateInput.valueOf() + getOneDay * getEndDay;
  return { type: dateTypes.SET_END_DATE_OF_WEEK, date: endDateOfWeek };
}
