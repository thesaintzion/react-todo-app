import React from 'react';
import './app-style.css';
// Components
import Footer from '../Footer';
import Home from '../Home';
import Header from '../Header';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import {   Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

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
 <Header/>

{/* Home route */}
<Route exact path="/"  render={props => (
  <React.Fragment>
    <Home />
  </React.Fragment>
  ) 
  }/>

  {/* Contact */}
<Route path="/about"  render={props => (
  <React.Fragment>
      <About users={this.state.users} />
  </React.Fragment>
  ) 
  }/>

    {/* Contact */}
<Route path="/contact"  render={props => (
  <React.Fragment>
    <Contact />
  </React.Fragment>
  ) 
  }/>

{/* <Route exact path='/'  component={Home} />
<Route exact  path="/home" component={Home}/>
<Route  path="/about" component={About}/>
<Route  path="/contact" component={Contact}/> */}


{/* The footer */}
<Footer />
     </div>
     </Router>
    );
}
}


export default App;