import request from 'superagent';

export const CURRENT_USER_REQUEST = 'CURRENT_USER_REQUEST';
function requestCurrentUser() {
  return {
    type: CURRENT_USER_REQUEST,
  };
}

export const CURRENT_USER_RECIEVE = 'CURRENT_USER_RECIEVE';
function receiveCurrentUser(user) {
  return {
    type: CURRENT_USER_RECIEVE,
    userId: user.id,
    entities: {
      users: {
        [user.id]: user
      }
    }
  };
}

export const CURRENT_USER_FAILURE = 'CURRENT_USER_FAILURE';
function receiveCurrentUserError(error) {
  return {
    type: CURRENT_USER_FAILURE,
    error,
  };
}

export function fetchCurrentUser() {
  return (dispatch, getState) => {
    dispatch(requestCurrentUser());

    return request
      .get(`${API_GATEWAY_URL}/api/v1/users/me`)
      .set('Authorization', `Bearer ${getState().auth.token}`)
      .then((res) => {
        dispatch(receiveCurrentUser(res.body));
      })
      .catch((error) => {
        dispatch(receiveCurrentUserError(error));
      });
  };
}

export function fetchCurrentUserIfNeeded() {
  return (dispatch, getState) => {
    if (!getState().auth.user) {
      return dispatch(fetchCurrentUser());
    }
    return Promise.resolve();
  };
}
