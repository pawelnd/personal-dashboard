import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authReducer } from './auth/reducer';
import { interfaceReducer } from './interface/reducer';
import { firebaseStateReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  interface: interfaceReducer,
  firebase: firebaseStateReducer,
  form: formReducer
});
