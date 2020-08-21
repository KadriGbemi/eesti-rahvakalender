import { dateTypes } from '../_constants.js';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case dateTypes.SET_FIRST_DATE:
      return Object.assign({}, state, {
        firstDate: action.date,
      });
    default:
      return state;
  }
}

export default rootReducer;
