import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleSubmit = (event) => {
    if (event.key === 'Enter'){
       this.citySearch(event.target.value);
    }
  }

  citySearch(searchCity){
    let upperCity = searchCity.toUpperCase();
    console.log(upperCity);
  }

  render(){
    return (
      <div id='search-form'>
        <form>
          City:
          <input type="text" name="city" placeholder="Try Chicago"  onKeyDown= {this.handleSubmit} value={this.state.city}/>
        </form>
      </div>
    );
  }
}

export default SearchForm;
