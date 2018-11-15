import { createSelector } from 'reselect';


export const getAuth = createSelector(
  state => state.auth,
  auth => auth.toJS(),
);


export function isAuthenticated(state) {
  return getAuth(state).authenticated;
}
