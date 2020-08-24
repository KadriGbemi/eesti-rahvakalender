import { dateTypes, inputEventTypes, responseTypes } from '../_constants.js';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case dateTypes.SET_FIRST_DATE:
      return Object.assign({}, state, {
        firstDate: action.date,
      });
    case inputEventTypes.SET_DATES_IS_CALLED:
      return Object.assign({}, state, {
        actionType: action.name,
      });
    case inputEventTypes.DATE_IS_SELECTED:
      return Object.assign({}, state, {
        dateSelected: action.payload,
      });
    case inputEventTypes.DAY_IS_SELECTED:
      return Object.assign({}, state, {
        daySelected: action.payload,
      });
    case dateTypes.SET_START_DATE_OF_WEEK:
      return Object.assign({}, state, {
        startDateOfWeek: action.date,
      });
    case dateTypes.SET_END_DATE_OF_WEEK:
      return Object.assign({}, state, {
        endDateOfWeek: action.date,
      });
    case responseTypes.STORE_EVENTS_DATA:
      return Object.assign({}, state, {
        holidays: action.payload,
      });
    case responseTypes.STORE_EVENTS_DATA_ERROR:
      return Object.assign({}, state, {
        eventsError: action.payload,
      });
    default:
      return state;
  }
}

export default rootReducer;
