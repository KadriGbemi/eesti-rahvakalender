import {
  setStartDateOfWeek,
  setEndDateOfWeek,
  setFirstDate,
  setDatesIsCalled,
  storeEventsData,
  storeEventsDataError,
  dayIsSelected,
} from './creators';
import { getDateOfWeek, dateFormatToISO, getDateRange } from './helper';
import { getEvents } from '../../services/_api/request.js';

async function getEventsRequest(startDate, endDate, startDateNoFormat, dispatch) {
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
  const startDate = dateFormatToISO(startDateOfWeek);
  const endDate = dateFormatToISO(endDateOfWeek);
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
    dispatch(setFirstDate(dateInput));
    dispatch(setStartDateOfWeek(startDateOfWeek));
    dispatch(setEndDateOfWeek(endDateOfWeek));
    dispatch(handleGetEventsRequest(startDateOfWeek, endDateOfWeek));
  };
}

export function setDatesByDay(dateObj) {
  const dateInput = new Date(dateObj.date);
  return function (dispatch) {
    dispatch(dayIsSelected(dateObj));
    dispatch(setDatesIsCalled('setDatesByDay'));
    dispatch(setFirstDate(null));
    dispatch(setStartDateOfWeek(dateInput));

    console.log('dateInputbyday', dateInput);
    const endDateOfWeek = getDateOfWeek(dateInput, 'end', 7);
    console.log('byday-endDateOfWeek', endDateOfWeek);
    dispatch(setEndDateOfWeek(endDateOfWeek));
    dispatch(handleGetEventsRequest(dateInput, endDateOfWeek));
  };
}
export function updateDateSetByDate(dateInput, type) {
  const getFirstDate =
    type === 'Previous'
      ? getDateOfWeek(dateInput, 'start', 7)
      : getDateOfWeek(dateInput, 'end', 7);
  return function (dispatch) {
    dispatch(setDatesByDate(new Date(getFirstDate)));
  };
}
