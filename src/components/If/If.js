import React from 'react';

const If = ({value, children}) => (
  <div>
    {(value) ? children : ''}
  </div>
);
export default If;