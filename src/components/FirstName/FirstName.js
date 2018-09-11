import React, { Component } from 'react';
import './FirstName.css';
import { connect } from 'react-redux';
import { firstNameHasChanged } from '../../actions/firstNameAction';

class FirstNameComponent extends Component {
  render() {
    return (
      <div>
        <div>Please write your name:</div>
        <input onChange={(e) => {this.props.updateFirstName(e.target.value)}}></input>
        <button
          onClick={ (e) => {
            // this.props.updateFirstName(e.target.value);
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
      updateFirstName: (value) => dispatch(firstNameHasChanged(value))
  };
};

export default connect(null, mapDispatchToProps)(FirstNameComponent);
