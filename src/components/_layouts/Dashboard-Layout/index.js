import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

export default ({children}) => (
              <main className="bg-warning" style={{minHeight: '100vh'}}>
              <div className="row">
                  <div className="col-md-3 bg-white  bg-green text-white shadow" style={{height: '100vh'}}>
                      <div className="container">
                      <h1>SIDE BAR</h1> 
                      </div>
                  </div>
                    <div className="col-md-9 h-100 bg-light">
                    <div className="container">
                    {children}
                    </div>
                  </div>
              </div>
              </main>
          
    
)