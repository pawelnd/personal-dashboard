import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {reactReduxFirebase} from 'react-redux-firebase'
import rootReducer from './modules';
import history from './history';
import {firebaseConfig} from "./firebase/config";
import {firebaseApp} from './firebase/firebase';

const initialState = {};
const enhancers = [];
const middleware = [
    routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);


const config = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false, // enable/disable Firebase's database logging
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebaseApp, config)
)(createStore)

// Create store with reducers and initial state
const store = createStoreWithFirebase(
    rootReducer, initialState,  composedEnhancers,)


export default store;
