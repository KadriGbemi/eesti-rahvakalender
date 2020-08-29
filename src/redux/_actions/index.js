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
  console.log('Check date selected', dateInput);
  const startDateOfWeek = getDateOfWeek(dateInput, 'start', dateInput.getDay());
  const getEndDay = 6 - dateInput.getDay();
  const endDateOfWeek = getDateOfWeek(dateInput, 'end', getEndDay);
  return function (dispatch) {
    dispatch(setDatesIsCalled('setDatesByDate'));
    dispatch(
      setDaySelected({ day: days[dateInput.getDay()], date: dateInput })
    );
    dispatch(setDateSelected(dateInput));
    dispatch(setStartDateOfWeek(startDateOfWeek));
    dispatch(setEndDateOfWeek(endDateOfWeek));
    dispatch(handleGetEventsRequest(startDateOfWeek, endDateOfWeek));
  };
}

export function setDatesByDay(dateObj) {
  console.log('Set by day', dateObj);
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
  console.log('See Type update', dateInput);
  let getFirstDate;
  if (type === 'Today') {
    getFirstDate = dateInput;
  } else {
    getFirstDate =
      type === 'Previous'
        ? getDateOfWeek(dateInput, 'start', 7)
        : getDateOfWeek(dateInput, 'end', 7);
  }
  return dispatch(setDatesByDate(getFirstDate));
}

function handleSetByDayUpdate(type, dateInput, dispatch) {
  const dateObj = JSON.parse(JSON.stringify(dateInput));
  dateObj['day'] = days[new Date(dateObj['date']).getDay()];
  if (type === 'Previous') {
    dateObj['date'] = getDateOfWeek(dateInput.date, 'start', 6);
  } else {
    dateObj['date'] = getDateOfWeek(dateInput.date, 'end', 6);
  }
  return dispatch(setDatesByDay(dateObj));
}

export function updateDates(dateInput, type, inputEventType) {
  console.log(`date input${dateInput}, type: ${type}`);
  return function (dispatch) {
    if (inputEventType === 'setDatesByDate') {
      return handleSetByDateUpdate(type, dateInput, dispatch);
    }
    type === 'Today'
      ? dispatch(setDatesByDate(dateInput))
      : handleSetByDayUpdate(type, dateInput, dispatch);
  };
}
