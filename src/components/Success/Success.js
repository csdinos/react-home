import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Well } from 'react-bootstrap';

class SuccessComponent extends Component {

  render() {
    return (
      <div>
        <PageHeader>Registration successfull</PageHeader>
        <Well>Thanks, {this.props.fullName}, for joining us. Further info will be sent via e-mail to {this.props.email}!</Well>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: state.fullName,
    email: state.email
  }
};

export default connect(mapStateToProps)(SuccessComponent);
