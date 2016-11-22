import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import sinon from 'sinon';
import request from 'superagent';
import mocker from 'superagent-mocker';
import * as usersActions from 'actions/users';

const mock = mocker(request);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('users actions', () => {
  describe('fetchCurrentUser', () => {
    afterEach(() => {
      mock.clearRoutes();
    });

    it('creates CURRENT_USER_RECIEVE when fetching user succeeds', () => {
      const mockUserId = Math.random().toString(36).slice(2);
      mock.get(`${API_GATEWAY_URL}/api/v1/users/me`, () => {
        return {
          body: { id: mockUserId }
        };
      });

      const expectedActions = [
        { type: usersActions.CURRENT_USER_REQUEST },
        { type: usersActions.CURRENT_USER_RECIEVE,
          userId: mockUserId,
          entities: {
            users: {
              [mockUserId]: {
                id: mockUserId
              }
            }
          }
        }
      ];
      const store = mockStore({
        auth: { token: Math.random().toString(36).slice(2) }
      });

      return store.dispatch(usersActions.fetchCurrentUser())
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });

    it('creates CURRENT_USER_FAILURE when fetching user fails', () => {
      mock.get(`${API_GATEWAY_URL}/api/v1/users/me`, () => {
        return {
          status: 401,
          body: 'Unauthorized'
        };
      });

      const expectedActions = [
        { type: usersActions.CURRENT_USER_REQUEST },
        { type: usersActions.CURRENT_USER_FAILURE,
          error: 'Unauthorized'
        }
      ];
      const store = mockStore({
        auth: { token: Math.random().toString(36).slice(2) }
      });

      return store.dispatch(usersActions.fetchCurrentUser())
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });
  });

  describe('fetchCurrentUserIfNeeded', () => {
    it('dispatches fetchCurrentUser when user is not in store ', () => {
      mock.get(`${API_GATEWAY_URL}/api/v1/users/me`, () => {
        return {
          status: 401,
          body: 'Unauthorized'
        };
      });
      const store = mockStore({
        auth: {
          token: Math.random().toString(36).slice(2),
        }
      });

      const expectedActions = [
        { type: usersActions.CURRENT_USER_REQUEST },
        { type: usersActions.CURRENT_USER_FAILURE,
          error: 'Unauthorized'
        }
      ];

      return store.dispatch(usersActions.fetchCurrentUserIfNeeded())
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });

    it('dispatches does not fetchCurrentUser when user is in store ', () => {
      const store = mockStore({
        auth: {
          token: Math.random().toString(36).slice(2),
          userId: Math.random().toString(36).slice(2),
        }
      });

      return store.dispatch(usersActions.fetchCurrentUserIfNeeded())
        .then(() => {
          expect(store.getActions()).to.be.empty;
        });
    });
  });
});
