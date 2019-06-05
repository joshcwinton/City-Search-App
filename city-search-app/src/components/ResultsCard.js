import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ResultsCard.css'

class ResultsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: this.props.zip
    }
  }

  render() {
    return (
      <div className = "ResultsCard">
        <h1> {this.state.zip} </h1>
      </div>
    );
  }
}

ResultsCard.propTypes = {
  zip: PropTypes.number
}

export default ResultsCard;
