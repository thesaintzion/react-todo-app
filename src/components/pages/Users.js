import React from 'react';

class Users extends React.Component {
    render() {
      
        if(this.props.users?.length > 0){
           return (this.props.users.map(user => {
                console.log('user', user);
              return( 
                  <React.Fragment>
                      <div className="mb-4" key={user._id}>
              <p className="mb-0">{user.firstname} {user.lastname}</p>
              <small className="color-green">{user.email}</small>
              </div>
              </React.Fragment>
              )
            })
           )
        }else{
return(
    <React.Fragment>
    <h1>No users to display</h1>
    </React.Fragment>
)

        }
    }
}
export default Users;
