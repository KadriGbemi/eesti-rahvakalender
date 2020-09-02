import {
  dateTypes,
  inputEventTypes,
  responseTypes
} from "../_constants.js/index.js";

export function setDateSelected(dateInput) {
  return { type: dateTypes.SET_DATE_SELECTED, date: dateInput };
}

export function setDaySelected(dateInput) {
  return { type: dateTypes.SET_DAY_SELECTED, date: dateInput };
}
export function setStartDateOfWeek(startDateOfWeek) {
  return { type: dateTypes.SET_START_DATE_OF_WEEK, date: startDateOfWeek };
}

export function setEndDateOfWeek(endDateOfWeek) {
  return { type: dateTypes.SET_END_DATE_OF_WEEK, date: endDateOfWeek };
}

export function setDatesIsCalled(type) {
  return { type: inputEventTypes.SET_DATES_IS_CALLED, name: type };
}

export function storeEventsData(data, dispatch, keysData) {
  dispatch({
    type: responseTypes.STORE_EVENTS_DATA,
    payload: data,
    keys: keysData
  });
}

export function storeEventsDataError(error, dispatch) {
  dispatch({ type: responseTypes.STORE_EVENTS_DATA_ERROR, payload: error });
}
