import React, { Component } from 'react';
import './Confirmation.css';
import { connect } from 'react-redux';

class ConfirmationComponent extends Component {
  constructor(props) {
    super(props);

    this.getSalary = this.getSalary.bind(this);
  }

  getSalary() {
    switch (this.props.salary) {
      case '1':
        return '0-1000';
      case '2':
        return '1000-2000';
      case '3':
        return '2000-3000';
      case '4':
        return '3000-4000';
      case '5':
        return 'Mehr als 4000';
    }
  }

  render() {
    let salary = this.getSalary();

    return (
      <div>
        <div>FirstName:</div>
        <div>{this.props.firstName}</div>
        <div>Email:</div>
        <div>{this.props.email}</div>
        <div>Phone:</div>
        <div>{this.props.phone}</div>
        <div>Salary:</div>
        <div>{salary}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    firstName: state.firstName,
    email: state.email,
    phone: state.phone,
    salary: state.salary,
  }
};

export default connect(mapStateToProps)(ConfirmationComponent);
