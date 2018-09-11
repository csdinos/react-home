import React, { Component } from 'react';
import './FirstName.css';
import { connect } from 'react-redux';
import { updateFirstName } from '../../actions/firstNameAction';
import { Confirmation } from '..';

class FirstNameComponent extends Component {
  render() {
    return (
      <div>
        <div>It workss</div>
        <input onChange={(e) => {this.props.updateFirstName(e.target.value)}}></input>
        <a href="/confirmation">link</a>
        <Confirmation></Confirmation>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateFirstName: (value) => dispatch(updateFirstName(value))
  };
};

export default connect(null, mapDispatchToProps)(FirstNameComponent);
