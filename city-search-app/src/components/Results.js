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

  componentDidUpdate(prevProps) {
    if (prevProps.arrayOfResults !== this.props.arrayOfResults) {
      this.setState({arrayOfResults: this.props.arrayOfResults})
    }
  }

  render(){
    return (
      <div className="results-container">
        {this.state.arrayOfResults.map(myZip => (<ResultsCard zip={myZip} key={myZip}/>))}
      </div>
    )
  }
}

Results.propTypes = {
  arrayOfResults: PropTypes.arrayOf(PropTypes.string)
}

export default Results;
