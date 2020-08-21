import { dateTypes } from '../_constants.js';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case dateTypes.SET_FIRST_DATE:
    console.log("Reducer", action.date)
      return Object.assign({}, state, {
        firstDate: action.date,
      });
      case dateTypes.SET_START_DATE_OF_WEEK:
      return Object.assign({}, state, {
        startDateOfWeek: action.date,
      });
      case dateTypes.SET_END_DATE_OF_WEEK:
      return Object.assign({}, state, {
        endDateOfWeek: action.date,
      });
    default:
      return state;
  }
}

export default rootReducer;
