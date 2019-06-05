import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ResultsCard from './ResultsCard.js'
import './Results.css';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrayOfResults: this.props.arrayOfResults,
    }
  }

  render(){
    return (
      <div className="results-container">
        <ResultsCard zip={11111}/>
        <ResultsCard zip={11112}/>
        <ResultsCard zip={11113}/>
        <ResultsCard zip={11113}/>
      </div>
    )
  }
}

Results.propTypes = {
  arrayOfResults: PropTypes.arrayOf(PropTypes.number)
}

export default Results;
