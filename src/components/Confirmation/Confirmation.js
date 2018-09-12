import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  ListGroup,
  ListGroupItem,
  PageHeader,
  Button
} from 'react-bootstrap';

import {
  salaryRanges,
  CONFIRMATION_FIELD_FULL_NAME,
  CONFIRMATION_FIELD_EMAIL,
  CONFIRMATION_FIELD_PHONE,
  CONFIRMATION_FIELD_SALARY,
} from '../../constants';

import './Confirmation.css';

class ConfirmationComponent extends Component {
  createListGroupItems = () => {
    let fields = [
      {
        name: CONFIRMATION_FIELD_FULL_NAME,
        value: this.props.fullName
      },
      {
        name: CONFIRMATION_FIELD_EMAIL,
        value: this.props.email
      },
      {
        name: CONFIRMATION_FIELD_PHONE,
        value: this.props.phone
      },
      {
        name: CONFIRMATION_FIELD_SALARY,
        value: salaryRanges[this.props.salary]
      },
    ];
    let listGroupItems = [];

    for (let i = 0, length = fields.length; i < length; i++) {
      listGroupItems.push(
        <ListGroupItem 
            key={i}
            className="confirmation--element" 
            onClick={(e) => this.props.goToStep(i + 1)
          }>
            <span className="confirmation--element-title">{fields[i].name}:</span>
            <span>{fields[i].value}</span>
          </ListGroupItem>
      )
    }
    return listGroupItems;
  }

  render() {
    return (
      <div>
        <PageHeader>Overview</PageHeader>
        <ListGroup className="confirmation--element-group">
          {this.createListGroupItems()}
        </ListGroup>
        <Button onClick={this.props.nextStep} bsStyle="primary" block>Next</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: state.fullName,
    email: state.email,
    phone: state.phone,
    salary: state.salary,
  }
};

export default connect(mapStateToProps)(ConfirmationComponent);
