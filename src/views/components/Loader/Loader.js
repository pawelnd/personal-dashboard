import React from 'react';
import './Loader.scss'

const Loader = () => (
  <div className="loader">
    <div className="loader-animation">
      <svg className="loader-animation-element" viewBox="25 25 50 50">
        <circle className="loader-animation-path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
      </svg>
    </div>
  </div>

)

export default Loader;
