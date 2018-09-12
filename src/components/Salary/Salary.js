import React, { Component } from 'react';
import './Salary.css';
import { connect } from 'react-redux';
import { salaryHasChanged } from '../../actions/salaryAction';
import { Form, ButtonToolbar, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class EmailComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedOption: 1,
    }

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.props.updateSalary(this.state.selectedOption);
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

  render() {
    return (
      <div>
        <div>Please select your salary:</div>
        <Form onSubmit={this.handleFormSubmit}>
            <ButtonToolbar>
              <ToggleButtonGroup 
                type="radio" 
                name="salaryOptions" 
                defaultValue={1} 
                onChange={this.handleOptionChange} 
                value={this.state.selectedOption}
                className="salary--radioGroup"
              >
                <ToggleButton 
                  className="salary--radioSelection"
                  value={1}
                >
                  0-1000
                </ToggleButton>
                <ToggleButton
                  className="salary--radioSelection"
                  value={2}
                >
                  1000-2000
                </ToggleButton>
                <ToggleButton
                  className="salary--radioSelection"
                  value={3}
                >
                  2000-3000
                </ToggleButton>
                <ToggleButton
                  className="salary--radioSelection"
                  value={4}
                >
                  3000-4000
                </ToggleButton>
                <ToggleButton
                  className="salary--radioSelection"
                  value={5}
                >
                  More than 4000
                </ToggleButton>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateSalary: (value) => dispatch(salaryHasChanged(value))
  };
};

export default connect(null, mapDispatchToProps)(EmailComponent);
