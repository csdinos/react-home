import React, { Component } from 'react';
import './Salary.css';
import { connect } from 'react-redux';
import { salaryHasChanged } from '../../actions/salaryAction';

class EmailComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedOption: '1',
    }

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.props.updateSalary(this.state.selectedOption);
  }

  handleOptionChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
    this.props.updateSalary(e.target.value);
  }

  handleFormSubmit(e) {
    this.props.nextStep(e);
  }

  render() {
    return (
      <div>
        <div>Please select your salary:</div>
        <form onSubmit={this.handleFormSubmit}>
            <div className="radio">
              <label>
                <input type="radio" value="1" checked={this.state.selectedOption === '1'} onChange={this.handleOptionChange} />
                0-1000
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="2" checked={this.state.selectedOption === '2'} onChange={this.handleOptionChange}/>
                1000-2000
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="3" checked={this.state.selectedOption === '3'} onChange={this.handleOptionChange}/>
                2000-3000
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="4" checked={this.state.selectedOption === '4'} onChange={this.handleOptionChange}/>
                3000-4000
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="5" checked={this.state.selectedOption === '5'} onChange={this.handleOptionChange}/>
                  Mehr als 4.000
              </label>
            </div>
            <button className="btn btn-default" type="submit">Save</button>
          </form>
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
