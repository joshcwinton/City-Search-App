import React, { Component } from 'react';
import './SearchForm.css';
import Results from './Results.js';
import axios from 'axios';

let resultsVisible = false;

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      myData: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function(e) {
    if(e.key === 'Enter'){
      axios.get('http://ctp-zip-api.herokuapp.com/city/' + e.target.value.toUpperCase())
      .then(res => {
        this.setState((state, props) => state.myData = res.data)
      })
      .catch(res => {
        this.setState((state, props) => state.myData = [])
        console.log("Not a city");
      })
    }
    resultsVisible = true;
  }

  render(){
    if(resultsVisible){
      return (
        <div id='search-form'>
          City:
          <input type="text" name="city" placeholder="Try Chicago"  onKeyDown= {this.handleSubmit} value={this.state.city} autoComplete="off"/>
          <Results arrayOfResults={this.state.myData} />
        </div>
      );
    } else {
      return (
        <div id='search-form'>
          City:
          <input type="text" name="city" placeholder="Try Chicago"  onKeyDown= {this.handleSubmit} value={this.state.city} autoComplete="off"/>
        </div>
      );
    }
  }
}

export default SearchForm;
