import React from 'react';
import './App.css';



// Components
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Header from './components/header/Header';

import About from './components/pages/About';
import Contact from './components/pages/Contact';


import {   Route, Switch } from 'react-router-dom';

class  App  extends React.Component{
  render(){ 
    return ( 
    <div className = "app" >

{/* The Header */}
<Header/>



<Switch>


<Route exact path='/'  component={Home} />
<Route exact  path="/home" component={Home}/>
<Route  path="/about" component={About}/>
<Route  path="/contact" component={Contact}/>


</Switch>



{/* The footer */}
<Footer/>
     </div>
    );
}
}


export default App;