import React from 'react';
// import  {  NavLink  } from 'react-router-dom';
import logo from '../../logo.svg';
import './Header.css';

class Header extends React.Component{


    render(){
        
        return(

    <header>
    <nav className=" header-nav  d-flex justify-content-between align-item-center align-content-center py-2  w-100 shadow-sm  px-5">
      <div className="app-brand">
      <img  src={logo} className="app-logo" alt="logo" />
      <span>Blog</span>
      </div>
      <div className="app-nav">
        
        <button className="btn border btn-sm ">Add New</button>
    
       
      </div>





  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  
  {/* <div className="collapse navbar-collapse form-inline my-2 my-lg-0" id="navbarTogglerDemo03">
 
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-center mx-auto">
   
      <li className="nav-item active">
        <NavLink  activeClassName="navActive" className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink >
      </li>
      <li className="nav-item">
        <NavLink activeClassName="navActive"  className="nav-link" to="/about">About</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  activeClassName="navActive" className="nav-link" to="/contact">Contact</NavLink >
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
  
   
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div> */}
  
</nav>


    </header>
        )
    }
}

export default Header;