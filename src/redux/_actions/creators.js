import {
  dateTypes,
  inputEventTypes,
  responseTypes,
} from '../_constants.js/index.js';

export function setStartDateOfWeek(startDateOfWeek) {
  return { type: dateTypes.SET_START_DATE_OF_WEEK, date: startDateOfWeek };
}

export function setEndDateOfWeek(endDateOfWeek) {
  return { type: dateTypes.SET_END_DATE_OF_WEEK, date: endDateOfWeek };
}

export function setFirstDate(dateInput) {
  return { type: dateTypes.SET_FIRST_DATE, date: dateInput };
}

export function setDatesIsCalled(type) {
  return { type: inputEventTypes.SET_DATES_IS_CALLED, name: type };
}

export function datesIsSelected(date) {
  return function (dispatch) {
    dispatch({ type: inputEventTypes.DATE_IS_SELECTED, payload: date });
  };
}

export function dayIsSelected(date) {
  return function (dispatch) {
    dispatch({ type: inputEventTypes.DAY_IS_SELECTED, payload: date });
  };
}

export function storeEventsData(data, dispatch) {
  dispatch({ type: responseTypes.STORE_EVENTS_DATA, payload: data });
}

export function storeEventsDataError(error, dispatch) {
  dispatch({ type: responseTypes.STORE_EVENTS_DATA_ERROR, payload: error });
}
