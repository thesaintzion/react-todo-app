import React, { Component } from 'react'

 class Posts extends Component {

    showPosts(){
        console.log(this.props.posts)
    }
    render() {
    let posts = this.props.posts;
    // posts = [];

        if(posts.length > 0){
            return (posts.map( (post) => 
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
         </div>))  
        }else{
            return(
                <h1 className="text-center">NO POSTS FOUND</h1>
            )
        }
     
          
        
    }
}

export default Posts;
