import {
  FETCH_CYCLES_REQUEST, FETCH_CYCLES_RECIEVE, FETCH_CYCLES_FAILURE
} from 'actions/cycles';

const initialState = { data: [], loaded: false, error: '' };

export default function cycles(state = initialState, action) {
  switch (action.type) {
    case FETCH_CYCLES_REQUEST:
      return initialState;

    case FETCH_CYCLES_RECIEVE:
      return {
        loaded: true,
        data: action.cycles,
        error: ''
      };

    case FETCH_CYCLES_FAILURE:
      return {
        loaded: true,
        data: [],
        error: action.error
      };

    default:
      return state;
  }
}
