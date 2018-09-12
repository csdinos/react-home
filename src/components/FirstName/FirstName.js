import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firstNameHasChanged } from '../../actions/firstNameAction';
import { Form } from '../Form';

class FirstNameComponent extends Component {
  
  render() {
    return (
      <Form 
        name="full name" 
        type="text"
        value={this.props.firstName}
        handleValueChange={this.props.updateFirstName}
        nextStep={this.props.nextStep}
      >
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateFirstName: (value) => dispatch(firstNameHasChanged(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstNameComponent);
