import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

export default ({children}) => (
    
          <React.Fragment>
              <Header />
              {children}
              <Footer />

          </React.Fragment>
    
)

