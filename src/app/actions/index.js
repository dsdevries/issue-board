import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

export function getIssues() {
  return {type: types.GET_ISSUES};
}

export function getIssuesError() {
  return {
    type: types.GET_ISSUES_ERROR,
    error: 'something went wrong..'
  };
}

export function getIssuesReceived(json) {
  return {
    type: types.GET_ISSUES_RECEIVED,
    issues: json
  };
}

export function fetchIssues() {
  return dispatch => {
    dispatch(getIssues());
    return fetch('https://api.github.com/repos/dsdevries/issue-board/issues')
            .then(
                    response => response.json(),
                    )
            .then(json =>
              dispatch(getIssuesReceived(json))
            );
  };
}

export function getComments() {
  return {type: types.GET_COMMENTS};
}

export function getCommentsError() {
  return {
    type: types.GET_COMMENTS_ERROR,
    error: 'something went wrong..'
  };
}

export function getCommentsReceived(json) {
  return {
    type: types.GET_COMMENTS_RECEIVED,
    comments: json
  };
}

export function fetchComments(url) {
  return dispatch => {
    dispatch(getComments());
    return fetch(url)
            .then(
                    response => response.json(),
                    )
            .then(json =>
              dispatch(getCommentsReceived(json))
            );
  };
}
