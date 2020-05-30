
import React, { } from 'react';
import './home-style.css';
import Posts  from '../Posts';
import img1  from '../../assets/img/Aggital-2018-in-Review-1.jpg';
import img2  from '../../assets/img/Aggital-2018-in-Review-5.jpg';
import img3  from '../../assets/img/Aggital-2018-in-Review-9.jpg';
import AddPost from '../Add-Post';


class Home extends React.Component{
state = {
  posts:[
  {
    id: Math.random(1, 8),
      title: 'Some kind of title',
      description: `Some quick example text to build on the card title.`,
      img: img1
  },
  {
    id: Math.random(1, 8),
    title: 'Some kind of title two',
    description: `Second Some quick example text to build`,
    img: img2
},
{
  id: Math.random(1, 8),
  title: 'Some kind of title three',
  description: `Second Some quick example text to build on the.`,
  img: img3
},
{
  id: Math.random(1, 8),
  title: 'Some kind of title three',
  description: `Second Some quick example text to build on the.`,
  img: img1
},
{
  id: Math.random(1, 8),
  title: 'Some kind of title three',
  description: `Second Some quick example text to build on the.`,
  img: img3
},

{
  id: Math.random(1, 8),
  title: 'Some kind of title three',
  description: `Second Some quick example text to build on the.`,
  img: img1
},


]}

 deletePost = (id) =>{
  console.log(id)
  this.setState({posts: [...this.state.posts.filter((post) =>  post.id !== id  )]})
}

addPost = (post) => {
 
  const {title, description, imageId} = post;

  let image = '';

  if(imageId ==='1'){
    image = img1
  }else if(imageId === '2'){
    image = img2
  }else{
    image = img3
  }

  let newPost = {
    id: Math.random(1, 8),
    title,
    description,
    img: image
  }
  console.log(newPost);
  this.setState({
    posts: [...this.state.posts, newPost]
  });
}
    render(){
     
  
        return(
  <div className="posts container">
     <div className="row">
        <div className="col-md-12 text-right"><p className="mr-3"> Total: <strong >{this.state.posts.length}</strong></p></div>
            <Posts deletePost={this.deletePost} posts={this.state.posts} />
        </div>
        <AddPost addPost={this.addPost} />
</div>




        )

      
    }
}

export default Home;