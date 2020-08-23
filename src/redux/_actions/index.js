import {
  setStartDateOfWeek,
  setEndDateOfWeek,
  setFirstDate,
  setDatesIsCalled,
} from './creators';
import { getDateOfWeek, dateFormatToISO } from './helper';
import { getEvents } from '../../services/_api/request.js';

export function setDatesByDay(dateInput) {
  return function (dispatch) {
    dispatch(setDatesIsCalled('setDatesByDay'));
    dispatch(setFirstDate('none'));
    dispatch(setStartDateOfWeek(dateInput));

    const endDateOfWeek = getDateOfWeek(dateInput, 'end', 7);
    dispatch(setEndDateOfWeek(endDateOfWeek));
  };
}

function handleGetEventsRequest(startDateOfWeek, endDateOfWeek) {
  const startDate = dateFormatToISO(startDateOfWeek);
  const endDate = dateFormatToISO(endDateOfWeek);
  return getEvents(startDate, endDate);
}

export function setDates(dateInput) {
  const startDateOfWeek = getDateOfWeek(dateInput, 'start', dateInput.getDay());
  const getEndDay = 6 - dateInput.getDay();
  const endDateOfWeek = getDateOfWeek(dateInput, 'end', getEndDay);
  return function (dispatch) {
    dispatch(setDatesIsCalled('setDates'));
    dispatch(setFirstDate(dateInput));
    dispatch(setStartDateOfWeek(startDateOfWeek));
    dispatch(setEndDateOfWeek(endDateOfWeek));
    // dispatch(handleGetEventsRequest(startDateOfWeek, endDateOfWeek));
  };
}

export function updateFirstDate(dateInput, type) {
  const getFirstDate =
    type === 'Previous'
      ? getDateOfWeek(dateInput, 'start', 7)
      : getDateOfWeek(dateInput, 'end', 7);
  return function (dispatch) {
    dispatch(setDates(new Date(getFirstDate)));
  };
}
// export function setDateRange(dateInput) {
//   const startDateOfWeek = dateInput.valueOf() - getOneDay * dateInput.getDay();
//   return { type: dateTypes.SET_START_DATE_OF_WEEK, date: startDateOfWeek };
// }
