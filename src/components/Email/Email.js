import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailHasChanged } from '../../actions/emailAction';
import { Form } from '../Form';

class EmailComponent extends Component {
  render() {
    return (
      <Form 
        name="email" 
        type="email"
        value={this.props.email}
        handleValueChange={this.props.updateEmail}
        nextStep={this.props.nextStep}
      >
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmail: (value) => dispatch(emailHasChanged(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailComponent);
