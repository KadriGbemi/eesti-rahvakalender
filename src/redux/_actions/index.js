import {
  setStartDateOfWeek,
  setEndDateOfWeek,
  setFirstDate,
  setDatesIsCalled,
  storeEventsData,
  storeEventsDataError,
} from './creators';
import { getDateOfWeek, dateFormatToISO, getDateRange } from './helper';
import { getEvents } from '../../services/_api/request.js';

async function getEventsRequest(
  startDate,
  endDate,
  startDateNoFormat,
  endDateNoFormat,
  dispatch
) {
  try {
    const response = await getEvents(startDate, endDate);
    if (response && response.data && response.data.error === false) {
      return storeEventsData(
        getDateRange(startDateNoFormat, endDateNoFormat, response.data),
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
    getEventsRequest(
      startDate,
      endDate,
      startDateOfWeek,
      endDateOfWeek,
      dispatch
    );
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

export function setDatesByDay(dayInput) {
  return function (dispatch) {
    dispatch(setDatesIsCalled('setDatesByDay'));
    dispatch(setFirstDate('none'));
    dispatch(setStartDateOfWeek(dayInput));

    const endDateOfWeek = getDateOfWeek(dayInput, 'end', 7);
    dispatch(setEndDateOfWeek(endDateOfWeek));
    dispatch(handleGetEventsRequest(dayInput, endDateOfWeek));
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
