import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from './store/';
import {
  FirstName,
  Email,
  Confirmation,
  NotFound,
  Phone,
  Salary,
  ProgressBar,
  } from './components';

const store = createStore();

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            step: 1,
        }

        this.nextStep = this.nextStep.bind(this);
    }

    nextStep(e) {
        e.preventDefault();
        this.setState({
            step: this.state.step + 1
        });
    }

    renderStep() {
        switch (this.state.step) {
            case 1:
                return <FirstName nextStep={this.nextStep}></FirstName>;
            case 2:
                return <Email nextStep={this.nextStep}></Email>;
            case 3:
                return <Phone nextStep={this.nextStep}></Phone>;
            case 4:
            return <Salary nextStep={this.nextStep}></Salary>;
            case 5:
                return <Confirmation></Confirmation>;
            default:
                return <NotFound></NotFound>;
            
        }
    }

    render () {
        let totalSteps = 5;
        let progress = (this.state.step - 1) / totalSteps * 100;

        return (
            <Provider store={store}>
                <div>
                    { this.renderStep(store) }
                    <ProgressBar progress={progress}></ProgressBar>
                </div>
            </Provider>
        );
    }
}

export default App;
