import { TOGGLE_DRAWER } from './action-types';
import { Record } from 'immutable';

export const InterfaceState = new Record({
  drawerOpen: false,
});

export function interfaceReducer(state = new InterfaceState(), { payload, type }) {
  switch (type) {
    case TOGGLE_DRAWER:

      return state.merge({
        drawerOpen: !state.toJS().drawerOpen,
      });

    default:
      return state;
  }
}
