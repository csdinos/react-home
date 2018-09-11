import React, { Component } from 'react';
import './Confirmation.css';
import { connect } from 'react-redux';

class ConfirmationComponent extends Component {
  render() {
    console.log(1);
    console.log(this.props);
    return (
      <div>
        <div>It works</div>
        <div>{this.props.firstName}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  console.log(2);
  console.log(state);
  return {
    firstName: state.firstName,
  }
};

export default connect(mapStateToProps)(ConfirmationComponent);
