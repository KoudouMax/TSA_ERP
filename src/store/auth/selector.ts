import { createSelector } from 'reselect'
import {RootState} from '../reducers'

const authSelectors =( state: RootState) => state.auth;

export const getLoggedIn = createSelector(
    authSelectors,
    (auth) => auth.authData.loggedIn
  );