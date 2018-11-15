import {Transition} from "react-transition-group";
import React from 'react';

const duration = 300;

const defaultStyle = {
    transition: `margin-top ${duration}ms ease-in-out`,
    marginTop: '10px',
}

const transitionStyles = {
    entering: { marginTop: '10px' },
    entered: { marginTop: '10%' },
};

export const MoveDown = ({ in: inProp, children }) => {
    return (
        <Transition in={inProp} timeout={duration}>
            {(state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    {children}
                </div>
            )}
        </Transition>
    )
};
