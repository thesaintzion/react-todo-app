import React from 'react';
import './header-style.css';
import  {  NavLink  } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import logo from '../../logo.svg';

class Header extends React.Component{


    render(){
        
        return(

    <header className="bg-ligh shadow-sm">
        <div className="container">
    <nav className="header-nav  d-flex justify-content-between  w-100  ">
      <div className="app-brand d-flex  align-items-center">
      <img  src={logo} className="app-logo" alt="logo" />
      <strong >React</strong>
      </div>
      <div className="app-nav d-flex flex-1 ">
       <NavLink exact to="/" className="text-muted h-100 d-flex align-items-center"> <Icon>home</Icon> </NavLink>
       <NavLink to="/about" className="text-muted ml-4 h-100 d-flex align-items-center"><Icon>info</Icon> </NavLink>
       <NavLink to="/contact" className="text-muted ml-4 h-100 d-flex align-items-center"><Icon>contacts</Icon></NavLink>
       <NavLink to="/dashboard" className="text-muted ml-4 h-100 d-flex align-items-center">
        <Icon>dashboard</Icon> 
        </NavLink>
     
      </div> 
     
</nav>
</div>


    </header>
        )
    }
}

export default Header;