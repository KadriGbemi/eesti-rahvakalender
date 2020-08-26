import {
  dateTypes,
  inputEventTypes,
  responseTypes,
  errorTypes,
} from '../_constants.js';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case dateTypes.SET_DATE_SELECTED:
      return Object.assign({}, state, {
        dateSelected: action.date,
      });
    case dateTypes.SET_DAY_SELECTED:
      return Object.assign({}, state, {
        daySelected: action.date,
      });
    case dateTypes.SET_START_DATE_OF_WEEK:
      return Object.assign({}, state, {
        startDateOfWeek: action.date,
      });
    case dateTypes.SET_END_DATE_OF_WEEK:
      return Object.assign({}, state, {
        endDateOfWeek: action.date,
      });
    case inputEventTypes.SET_DATES_IS_CALLED:
      return Object.assign({}, state, {
        inputEventType: action.name,
      });
    case responseTypes.STORE_EVENTS_DATA:
      return Object.assign({}, state, {
        holidays: action.payload,
      });
    case errorTypes.STORE_EVENTS_DATA_ERROR:
      return Object.assign({}, state, {
        eventsError: action.payload,
      });
    default:
      return state;
  }
}

export default rootReducer;
