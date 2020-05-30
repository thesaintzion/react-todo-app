import React, { Component } from 'react'
import './dashboard-home-style.css';
import Icon from '@material-ui/core/Icon';
import  {  NavLink  } from 'react-router-dom';

class DashboardHome extends Component {
    render() {
        return(
<React.Fragment>
    <div className="animated fadeInUp d-flex text-center align-items-center w-100" style={{height: '80vh'}}>
      <div className="container">
      <h6 className="colo-green mb-5">Some useful links</h6>
        <div className="app-nav d-flex  justify-content-center color-green">
          <NavLink exact to="/" className="text-muted d-flex align-items-center"> <Icon>home</Icon> </NavLink>
          <NavLink to="/about" className="text-muted ml-4 h-100 d-flex align-items-center"><Icon>info</Icon> </NavLink>
          <NavLink to="/contact" className="text-muted ml-4 h-100 d-flex align-items-center"><Icon>contacts</Icon></NavLink>
          <NavLink to="/dashboard" className="text-muted ml-4 h-100 d-flex align-items-center"><Icon>dashboard</Icon> </NavLink>
        </div>
      </div>
    </div>
</React.Fragment>
)
    }
}
export default DashboardHome;
