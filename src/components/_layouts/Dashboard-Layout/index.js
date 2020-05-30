import React from 'react';
import './dashboard-layout-style.scss';
// import  {  NavLink  } from 'react-router-dom';
// import Icon from '@material-ui/core/Icon';
import logo from '../../../assets/img/logo-shadow-2.svg';

export default ({children}) => (
              <main className="dashboard-layout" style={{minHeight: '100vh'}}>
              <div className="row no-gutters">
                  <div className="col-md-3" style={{overFlow: 'hidden'}}>
                    <div className="bg-light  shadow" style={{height: '100vh'}}>
                    <div className="px-3 py-2 w-100 bg-green text-white d-flex align-items-center">
                        <img className="logo" src={logo} alt="logo"/>
<h4 className="ml-2 d-inline-block mb-0 ">Fake Sidebar</h4>
                        </div>
                      <div className="container text-center pt-3">
                    
                      </div>
                      </div>
                  </div>
                    <div className="col-md-9 h-100">
                    <div className="px-3 py-3  d-flex align-items-center"> 
<h4 className="ml-2 d-inline-block mb-0 ">Home</h4>
                        </div>
                    <div className="container">
                    {children}
                    </div>
                  </div>
              </div>
              </main>
          
    
)