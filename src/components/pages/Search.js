import React, { Fragment } from 'react';


class Search extends React.Component{

state = {
    searchValue: '',
    amount: 10,
    searchInput: ''
}

// when you start typing.. this function funs
onSearchChange = (e) =>{
    console.log(e.target.value);
   this.setState({[e.target.name]: e.target.value}); 
}

// when you sele this function funs
onAmountChange  = (e) =>{
    
}

onSubmitForm = (e) =>{
    e.preventDefault();
    
}
    render(){
        

        return(
<Fragment>
<h5 className="text-cneter">Search Img </h5>
 <form className="row search-form" onSubmit={this.onSubmitForm}>
 <select className="form-control col-1" placeholder="Search Images" name="amount"  value={this.state.amount} onChange={this.onAmountChange}>
<option value={10}>10</option>
<option value={20}>20</option>

 <option value={30}>30</option>
<option value={40}>40</option>
<option value={50}>50</option>
     </select>

     <input className="form-control col-11" onChange={this.onSearchChange} value={this.state.searchInput}  name="searchInput" placeholder="Search Images" />
  
 </form>
</Fragment>
        )
    }
}

export default Search;