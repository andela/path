import { CURRENT_USER_RECIEVE, CURRENT_USER_FAILURE } from 'actions/users';

export default function auth(state = { token: null, userId: null }, action) {
  switch (action.type) {
    case CURRENT_USER_RECIEVE:
      return {
        token: state.token,
        userId: action.userId
      };

    case CURRENT_USER_FAILURE:
      return {
        token: state.token,
        userId: null,
      };

    default:
      return state;
  }
}
