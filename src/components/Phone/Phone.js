import React, { Component } from 'react';
import { connect } from 'react-redux';
import { phoneHasChanged } from '../../actions/phoneAction';
import { Form } from '../Form';

class EmailComponent extends Component {
  render() {
    return (
      <Form 
        name="phone" 
        type="number" 
        value={this.props.phone} 
        handleValueChange={this.props.updatePhone}
        nextStep={this.props.nextStep}
      >
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phone: state.phone,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePhone: (value) => dispatch(phoneHasChanged(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailComponent);
