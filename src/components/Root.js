import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

const AppWithTheme = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

const AppWithoutTheme = () => (<App />);

class Root extends Component {

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
            <Route path='/' component={AppWithTheme} />
        </Router>
      </Provider>
    );
  }
}

export default Root;
