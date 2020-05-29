import React, { Component } from 'react';
import './add-post-style.css';

class AddPost extends Component {
    state = {
        form: {
            title: '',
            description: '',
            imageId: ''
        },
        showform: false,
        ttt: 'Go Go Go'
    }

 
// Toggle
    toggleForm = () =>{
        return{
display: this.state.showform === true? 'block': 'none'
        }
    }
    showFormBtn = () => {
        this.setState({
            showform: this.state.showForm = !this.state.showform
        });
    }

    // Habdle input onchage
    inputOnChange = (e) => {
this.setState({
   [e.target.name]: this.state.form[e.target.name] = e.target.value  
})
    }

    // handle add post form 
    addPost = (e) => {
        e.preventDefault();
        if(this.state.form.title === '' || this.state.description === '' || this.state.imageId === ''){
            alert('Please fill in all fields.')
        }else{
            this.props.addPost(this.state.form);
            this.setState({
                title: [...this.state.form.title] = '',
                description: [...this.state.form.description] = '',
                imageId: [...this.state.form.imageId] = '',
            });
            this.showFormBtn();

        
        }
    }
    // Handle
    uploadImg = () =>{
        alert('woooo');
    } 
    // accept="image/*" (change)="fileChange($event.target.files)" type="file"
    render() {
     
        return (
            <div>
                <section style={this.toggleForm()} className="add-form-con ">
                    <div className="d-flex justify-content-bottom h-100">
                    <div className=" card px-2 py-2  animated faster flex-1 border-0 mx-auto shadow">
                    <div className="card-body ">
                    <h3 className="mb-4">Add Post <button onClick={this.showFormBtn}  className="btn float-right"><i className="fa fa-close text-danger "></i></button></h3>

                <form onSubmit={this.addPost}>
                    <div className="mb-3">
                        <input onChange={this.inputOnChange} name="title" value={this.state.form.title} className="form-control rounded-pill bg-light border" placeholder="Title" />
                        </div>
                        <div className="mb-3">
                        <input onChange={this.inputOnChange} name="description" value={this.state.form.description} className="form-control rounded-pill bg-light border" placeholder="Decs" />
                        </div>
                        <div className="mb-5">
                        <select onChange={this.inputOnChange}  name="imageId" value={this.state.form.imageId} className="form-control rounded-pill bg-light border">
                            <option value="">Select id</option>
                            <option value="1">Image 1 </option>
                            <option value="2">Image 2 </option>
                            <option value="3">Image 3 </option> 
                        </select>
                        </div>
                        <div className="mb-2 mt-2">
                            <button  className="rounded-pill btn px-4 bg-green text-white w-100 shadow">Add <i className="fa fa-plus"></i></button>
                        </div>
                </form>
                </div>
                </div>
                </div>
                </section>
                <div className="add-btn-con">
                <button onClick={this.showFormBtn} className="btn add-btn  shadow d-flex align-items-center justify-content-center rounded-circle">
                    <i className="fa fa-plus"></i>
                </button>
                  
                </div>
              {/* <div className="bg-white text-dark  shadow p-4 rounded-circle d-inline-block"><i className="fa fa-plus"></i></div> */}
            </div>
        )
    }
}
export default AddPost;
