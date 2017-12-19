import {GET_ISSUES, GET_ISSUES_RECEIVED, GET_ISSUES_ERROR} from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: []
};

export default function issues(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES:
      return Object.assign({}, state, {
        isFetching: true
      });

    case GET_ISSUES_RECEIVED:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.issues
      });

    case GET_ISSUES_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: []
      });

    default:
      return state;
  }
}
