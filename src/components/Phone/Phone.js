import React, { Component } from 'react';
import './Phone.css';
import { connect } from 'react-redux';
import { phoneHasChanged } from '../../actions/phoneAction';

class EmailComponent extends Component {
  render() {
    return (
      <div>
        <div>Please write your phone:</div>
        <input onChange={(e) => {this.props.updatePhone(e.target.value)}}></input>
        <button
          onClick={ (e) => {
            //this.props.updateFirstName(e.target.value);
            this.props.nextStep(e);
          }}>
            next
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePhone: (value) => dispatch(phoneHasChanged(value))
  };
};

export default connect(null, mapDispatchToProps)(EmailComponent);
