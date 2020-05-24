
import React, { } from 'react';
import './Home.css';
import Posts  from '../posts/Posts'



class Home extends React.Component{
state = {
  posts:[
  {
    id: 1,
      title: 'Some kind of title',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      img: 'Aggital-2018-in-Review-1.jpg'
  },
  {
    id: 2,
    title: 'Some kind of title two',
    description: `Second Some quick example text to build on the card title and make up the bulk of the card's content.`,
    img: 'Aggital-2018-in--5.jpg'
},
{
  id: 3,
  title: 'Some kind of title three',
  description: `Second Some quick example text to build on the card title and make up the bulk of the card's content.`,
  img: 'Aggital-2018-in-Revw-9.jpg'
}
]
      
}


    render(){
        return(
        
  <div className="posts container">
      <Posts posts={this.state.posts} />
  {/* {this.state.posts.map( (post) =>
  <div key={post.id} className="row mb-4">
   <div className="col-md-4 mx-auto">
<div className="card">
  <div className="text-center border-bottom" style={{height: '200px'}}>Img</div>
<div className="card-body">
<h5 >{post.title}</h5>
<p  className="mt-2">{post.description}</p>
</div>
</div>
</div>
</div>
    
  )} */}
</div>




        )

      
    }
}

export default Home;