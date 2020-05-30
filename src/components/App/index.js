import React, { Suspense, lazy } from 'react';
import './app-style.css';
import {   Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';
import MainSpinal from '../_spinals/Main-Spinal';
// Components
const  Home = lazy(() =>  import('../Home'));
const About = lazy(() =>  import('../pages/About'));
const Contact = lazy(() =>  import('../pages/Contact'));
const AppRoute = lazy(() =>  import('../_routes/App-Router'));
const MainLayout = lazy(() =>  import('../_layouts/Main-Layout'));
const DashboardLayout = lazy(() =>  import('../_layouts/Dashboard-Layout'));
const DashboardHome = lazy(() =>  import('../dashboard-components/Dashboard-Home'));

class  App  extends React.Component{
state = {
  users: [],
}

// Api url
url = 'http://localhost:3600/api/no-whatsapp/v1';
componentDidMount(){
// Get users
axios.get(`${this.url}/users`).then(res => {
  console.log('data', res.data,);
this.setState({
  users: res.data.users
});
}).catch( err => {
  console.error('Error getting users', err);
})

}

  render(){ 
    return ( 
<Router>
    <div className = "app" >
    <Suspense fallback={
    <MainSpinal />
    }>
      <Switch>
        <AppRoute exact path='/'  component={Home}  layout={MainLayout}/>
        <AppRoute  path='/contact'  component={Contact}  layout={MainLayout}/>
        <AppRoute  path='/about' users={this.state.users}  component={About}  layout={MainLayout}/>
        {/* ...using DashboardLayout */}
        <AppRoute exact path='/dashboard' component={DashboardHome}   layout={DashboardLayout}/>
        <AppRoute exact path='/users' component={DashboardHome}   layout={DashboardLayout}/>
      </Switch>
      </Suspense>
  </div>
</Router>
    );
}
}


export default App;