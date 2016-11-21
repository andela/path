import merge from 'lodash/merge';

export default function entities(state = { users: {} }, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }
  return state;
}
