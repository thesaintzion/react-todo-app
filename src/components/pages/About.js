import React, { Fragment }  from 'react';
import Users from './Users';


class About extends React.Component{

    render(){
        return(
<Fragment>
    <div className="animated fadeInLeft d-flex justify-content-center align-items-center app" style={{height: '100vh'}} >
  <div className="" style={{paddingTop: '200px'}}>
    <div className="container">
      <h1 className="bg-green text-white">ABOUT</h1>
<Users users={this.props.users} />
      </div>
</div>
</div>
</Fragment>
        );
      
    }
}

// About.propTypes = {
//   users: propTypes.oj
// }
export default About;