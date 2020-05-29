import React from 'react';
import  {  NavLink  } from 'react-router-dom';
import logo from '../../logo.svg';
import './header-style.css';

class Header extends React.Component{


    render(){
        
        return(

    <header className="bg-ligh shadow-sm">
        <div className="container">
    <nav className="header-nav  d-flex justify-content-between  w-100  ">
      <div className="app-brand d-flex align-items-center">
      <img  src={logo} className="app-logo" alt="logo" />
      <strong >React</strong>
      </div>
      <div className="app-nav d-flex ">
       <NavLink exact to="/" className="text-muted ml-3 h-100 d-flex align-items-center">Home</NavLink>
       <NavLink to="/about" className="text-muted ml-3 h-100 d-flex align-items-center">About</NavLink>
       <NavLink to="/contact" className="text-muted ml-3 h-100 d-flex align-items-center">Contact</NavLink>
      </div>  
</nav>
</div>


    </header>
        )
    }
}

export default Header;