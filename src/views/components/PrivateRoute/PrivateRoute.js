import {Redirect, Route} from "react-router";
import React, { Component}  from 'react';

export const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return authenticated ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}/>
                )
            }}
        />
    )
};