import * as types from '../actions/types';

const initialState = {
  result: []
};

export default (state = initialState, action) => {
  switch (action.type) {

  case types.FETCH_JOBS:
    return {
      ...state,
      result: action.payload
    }

  default:
    return state;
  }
}
