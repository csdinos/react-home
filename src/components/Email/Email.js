import React, { Component } from 'react';
import './Email.css';
import { connect } from 'react-redux';
import { emailHasChanged } from '../../actions/emailAction';

class EmailComponent extends Component {
  render() {
    return (
      <div>
        <div>Please write your email:</div>
        <input onChange={(e) => {this.props.updateEmail(e.target.value)}}></input>
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
    updateEmail: (value) => dispatch(emailHasChanged(value))
  };
};

export default connect(null, mapDispatchToProps)(EmailComponent);
