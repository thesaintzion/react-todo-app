import React, { Component, Fragment } from 'react'
import './post-item-style.css';


 class PostItem extends Component {
   

    render() {
        // Get pros of object from Posts...
        const {id, img, title, description} = this.props.post;

        return (
            <Fragment>
                <div className="col-md-6">
                <div className="d-flex post justify-content-between rounded overflow-hidden shadow-sm bg-white  mb-3 align-items-center">
                    <div className="bg-dark h-100">
                    <img   className="card-image-top h-100" src={img} alt={img} />
                    </div>
                    <div className="w-100 px-3 py-2">
        <p  className="mb-0"><strong>{title}</strong></p>
        <p  className="mt-1 mb-0 text-overflow">{description}</p>
                    </div>
                    <div className="bg-light h-100">
                        <button onClick={this.props.deletePost.bind(this, id)} className="btn h-100 color-green  animated faster">X</button>
                    </div>
                </div>
                </div>
  
            </Fragment>
        )
    }
}



export default  PostItem 
