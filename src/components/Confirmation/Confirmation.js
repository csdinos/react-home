import React, { Component } from 'react';
import './Confirmation.css';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, PageHeader, Button } from 'react-bootstrap';

class ConfirmationComponent extends Component {
  constructor(props) {
    super(props);

    this.getSalary = this.getSalary.bind(this);
  }

  getSalary() {
    switch (this.props.salary) {
      case 1:
        return '0-1000';
      case 2:
        return '1000-2000';
      case 3:
        return '2000-3000';
      case 4:
        return '3000-4000';
      case 5:
        return 'More than 4000';
    }
  }

  render() {
    let salary = this.getSalary();

    return (
      <div>
        <PageHeader>Overview</PageHeader>
        <ListGroup className="confirmation--element-group">
          <ListGroupItem className="confirmation--element" onClick={(e) => this.props.goToStep(1)}>
            <span className="confirmation--element-title">Full name:</span>
            <span>{this.props.firstName}</span>
          </ListGroupItem>
          <ListGroupItem className="confirmation--element" onClick={(e) => this.props.goToStep(2)}>
            <span className="confirmation--element-title">Email:</span>
            <span>{this.props.email}</span>
          </ListGroupItem>
          <ListGroupItem className="confirmation--element" onClick={(e) => this.props.goToStep(3)}>
            <span className="confirmation--element-title">Phone number:</span>
            <span>{this.props.phone}</span>
          </ListGroupItem>
          <ListGroupItem className="confirmation--element" onClick={(e) => this.props.goToStep(4)}>
            <span className="confirmation--element-title">Salary:</span>
            <span>{salary}</span>
          </ListGroupItem>
        </ListGroup>
        <Button onClick={this.props.nextStep} bsStyle="primary" block>Next</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    email: state.email,
    phone: state.phone,
    salary: state.salary,
  }
};

export default connect(mapStateToProps)(ConfirmationComponent);
