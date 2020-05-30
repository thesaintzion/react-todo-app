import React from 'react';
import './main-spinal-style.scss';
import logo from '../../../assets/img/logo-shadow-2.svg';

const MainSpinal = ()  => {
    return (
        <div className="main-spinal d-flex justify-content-center align-items-center app">
          <img  src={logo} alt="logo" />
        </div>
    )
}

export default MainSpinal;
