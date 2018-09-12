import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fullNameHasChanged } from '../../actions/fullNameAction';
import { Form } from '../Form';

class FulltNameComponent extends Component {
  
  render() {
    return (
      <Form 
        name="full name" 
        type="text"
        value={this.props.fullName}
        handleValueChange={this.props.updateFullName}
        nextStep={this.props.nextStep}
      >
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: state.fullName,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateFullName: (value) => dispatch(fullNameHasChanged(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FulltNameComponent);
