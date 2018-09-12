import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from './store/';
import { PageHeader } from 'react-bootstrap';
import {
  FullName,
  Email,
  Confirmation,
  NotFound,
  Phone,
  Salary,
  ProgressBar,
  Success,
  } from './components';

import './App.css';

const store = createStore();

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            step: 1,
        }

        this.nextStep = this.nextStep.bind(this);
        this.goToStep = this.goToStep.bind(this);
    }

    nextStep(e) {
        e.preventDefault();
        this.setState({
            step: this.state.step + 1
        });
    }

    goToStep(step) {
        this.setState({
            step: step
        });
    }

    renderStep() {
        let header = <PageHeader>Join us</PageHeader>
        switch (this.state.step) {
            case 1:
                return (
                    <div>
                        {header}
                        <FullName nextStep={this.nextStep}></FullName>
                    </div>
                );
            case 2:
                return (
                    <div>
                        {header}
                        <Email nextStep={this.nextStep}></Email>
                    </div>
                );
            case 3:
                return (
                    <div>
                        {header}
                        <Phone nextStep={this.nextStep}></Phone>
                    </div>
                );
            case 4:
                return (
                    <div>
                        {header}
                        <Salary nextStep={this.nextStep}></Salary>
                    </div>
                );
            case 5:
                return <Confirmation goToStep={this.goToStep} nextStep={this.nextStep}></Confirmation>;
            case 6:
                return <Success></Success>;
            default:
                return <NotFound></NotFound>;
            
        }
    }

    render () {
        let totalSteps = 5;
        let progress = (this.state.step - 1) / totalSteps * 100;

        return (
            <Provider store={store}>
                <div className="main-content">
                    { this.renderStep(store) }
                    <ProgressBar progress={progress}></ProgressBar>
                </div>
            </Provider>
        );
    }
}

export default App;
