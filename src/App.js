import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from './store/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  FirstName,
  Confirmation,
  NotFound
  } from './components';


class App extends Component {
    render () {
        const store = createStore();

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={FirstName}/>
                            <Route exact path="/confirmation" component={Confirmation}/>
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
