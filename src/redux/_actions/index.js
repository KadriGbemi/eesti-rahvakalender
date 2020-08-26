import {
  setDateSelected,
  setDaySelected,
  setStartDateOfWeek,
  setEndDateOfWeek,
  setDatesIsCalled,
  storeEventsData,
  storeEventsDataError,
} from './creators';
import { getDateOfWeek, dateFormat, getDateRange, days } from './helper';
import { getEvents } from '../../services/_api/request.js';

async function getEventsRequest(
  startDate,
  endDate,
  startDateNoFormat,
  dispatch
) {
  try {
    const response = await getEvents(startDate, endDate);
    if (response && response.data && response.data.error === false) {
      return storeEventsData(
        getDateRange(startDateNoFormat, response.data),
        dispatch
      );
    }
  } catch (error) {
    return storeEventsDataError(error, dispatch);
  }
}

function handleGetEventsRequest(startDateOfWeek, endDateOfWeek) {
  const startDate = dateFormat(startDateOfWeek);
  const endDate = dateFormat(endDateOfWeek);
  return function (dispatch) {
    getEventsRequest(startDate, endDate, startDateOfWeek, dispatch);
  };
}

export function setDatesByDate(dateInput) {
  const startDateOfWeek = getDateOfWeek(dateInput, 'start', dateInput.getDay());
  const getEndDay = 6 - dateInput.getDay();
  const endDateOfWeek = getDateOfWeek(dateInput, 'end', getEndDay);
  return function (dispatch) {
    dispatch(setDatesIsCalled('setDatesByDate'));
    dispatch(setDateSelected(dateInput));
    dispatch(setStartDateOfWeek(startDateOfWeek));
    dispatch(setEndDateOfWeek(endDateOfWeek));
    dispatch(handleGetEventsRequest(startDateOfWeek, endDateOfWeek));
  };
}

export function setDatesByDay(dateObj) {
  const dateInput = dateObj.date;
  const endDateOfWeek = getDateOfWeek(dateInput, 'end', 6);
  return function (dispatch) {
    dispatch(setDaySelected(dateObj));
    dispatch(setDatesIsCalled('setDatesByDay'));
    dispatch(setDateSelected(null));
    dispatch(setStartDateOfWeek(dateInput));
    dispatch(setEndDateOfWeek(endDateOfWeek));
    dispatch(handleGetEventsRequest(dateInput, endDateOfWeek));
  };
}

function handleSetByDateUpdate(type, dateInput, dispatch) {
  const getFirstDate =
    type === 'Previous'
      ? getDateOfWeek(dateInput, 'start', 7)
      : getDateOfWeek(dateInput, 'end', 7);
  return dispatch(setDatesByDate(getFirstDate));
}

export function updateDates(dateInput, type, inputEventType) {
  return function (dispatch) {
    if (inputEventType === 'setDatesByDate') {
      return handleSetByDateUpdate(type, dateInput, dispatch);
    }
    const dateCopy = JSON.parse(JSON.stringify(dateInput));
    if (type === 'Previous') {
      dateCopy['date'] = getDateOfWeek(dateInput.date, 'start', 6);
    } else {
      dateCopy['date'] = getDateOfWeek(dateInput.date, 'end', 6);
    }
    dateCopy['day'] = days[new Date(dateCopy['date']).getDay()];
    dispatch(setDatesByDay(dateCopy));
  };
}
