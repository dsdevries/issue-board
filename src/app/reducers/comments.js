import {GET_COMMENTS, GET_COMMENTS_RECEIVED, GET_COMMENTS_ERROR} from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: []
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true,
        items: []
      });

    case GET_COMMENTS_RECEIVED:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.comments
      });

    case GET_COMMENTS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: []
      });

    default:
      return state;
  }
}
