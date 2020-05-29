import React, { Fragment, Component }  from 'react';
import PostItem from './Post-item';
import logo from '../../logo.svg';

 class Posts extends Component {

    showPosts(){
        console.log(this.props.posts)
    }
   
  
    render() {
    
    let posts = this.props.posts;
    // posts = [];

        if(posts.length > 0){
            return (posts.map( (post) => 
            <PostItem deletePost={this.props.deletePost}  key={post.id} post={post} />
            ))  
        }else{
            return(
                <Fragment>
                <p className="text-center w-100">NO POSTS FOUND</p>
                <div className="mx-auto ">
                <img className=" w-100" src={logo} alt={logo} />
                </div>
                </Fragment>
            )
        }
     
          
        
    }
}


export default Posts;
