import React, { Component } from 'react';
import { connect } from 'react-redux';
import { salaryHasChanged } from '../../actions/salaryAction';
import { Form, ButtonToolbar, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import {salaryRanges} from '../../constants';

import './Salary.css';

class EmailComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: props.salary || 0,
    }

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    if (!props.salary) {
      this.props.updateSalary(this.state.selectedOption);
    }
  }

  handleOptionChange(value) {
    this.setState({
      selectedOption: value
    });
    this.props.updateSalary(value);
  }

  handleFormSubmit(e) {
    this.props.nextStep(e);
  }

  createToggleButtons = () => {
    let toggleButtons = []

    for (let i = 0, length = salaryRanges.length; i < length; i++) {
      toggleButtons.push(
        <ToggleButton 
          key={i}
          className="salary--radioSelection"
          value={i}
        >{salaryRanges[i]}
        </ToggleButton>
      )
    }
    return toggleButtons;
  }

  render() {
    return (
      <div>
        <div>Please select your salary:</div>
        <Form onSubmit={this.handleFormSubmit}>
            <ButtonToolbar>
              <ToggleButtonGroup 
                type="radio" 
                name="salaryOptions" 
                defaultValue={this.props.salary} 
                onChange={this.handleOptionChange} 
                value={this.state.selectedOption}
                className="salary--radioGroup"
              >
                {this.createToggleButtons()}
              </ToggleButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar>
              <Button type="submit" bsStyle="primary" block>Next</Button>
            </ButtonToolbar>
          </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    salary: state.salary,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSalary: (value) => dispatch(salaryHasChanged(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailComponent);
