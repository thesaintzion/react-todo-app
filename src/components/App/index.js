import React from 'react';
import './app-style.css';
// Components
import Footer from '../Footer';
import Home from '../Home';
import Header from '../Header';
import About from '../pages/About';
import Contact from '../pages/Contact';
import {   Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';
import AppRoute from '../_routes/App-Router';
import MainLayout from '../_layouts/Main-Layout';
import DashboardLayout from '../_layouts/Dashboard-Layout';
import DashboardHome from '../Dashboard-Home';

class  App  extends React.Component{
state = {
  users: [],
}
url = 'http://localhost:3600/api/no-whatsapp/v1'
componentDidMount(){
axios.get(`${this.url}/users`).then(res => {
this.setState({
  users: res.data.users
});
console.log('Users', res.data, 'Res', this.state.users);
}).catch( err => {
  console.error(err);
})


}

  render(){ 
    return ( 
      <Router>
    <div className = "app" >
{/* The Header */}
 {/* <Header/> */}

{/* Home route */}
{/* <Route exact path="/"  render={props => (
  <React.Fragment>
    <Home />
  </React.Fragment>
  ) 
  }/> */}

  {/* Contact */}
{/* <Route path="/about"  render={props => (
  <React.Fragment>
      <About users={this.state.users} />
  </React.Fragment>
  ) 
  }/> */}

    {/* Contact */}
{/* <Route path="/contact"  render={props => (
  <React.Fragment>
    <Contact />
  </React.Fragment>
  ) 
  }/> */}
<Switch>
{/* <Route exact path='/'  component={Home} />
<Route exact  path="/home" component={Home}/>
<Route  path="/about" component={About}/>
<Route  path="/contact" component={Contact}/> */}
<AppRoute exact path='/'  component={Home}  layout={MainLayout}/>
<AppRoute  path='/contact'  component={Contact}  layout={MainLayout}/>
<AppRoute exact path='/dashboard' component={DashboardHome}   layout={DashboardLayout}/>
</Switch>

{/* The footer */}
{/* <Footer /> */}
     </div>
     </Router>
    );
}
}


export default App;