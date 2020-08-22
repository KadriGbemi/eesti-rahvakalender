import { dateTypes, actionTypes } from '../_constants.js';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case dateTypes.SET_FIRST_DATE:
      return Object.assign({}, state, {
        firstDate: action.date,
      });
    case actionTypes.SET_DATES_IS_CALLED:
      return Object.assign({}, state, {
        actionType: action.name,
      });
    case actionTypes.SET_DATES_BY_DAY_IS_CALLED:
      return Object.assign({}, state, {
        actionType: action.name,
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
