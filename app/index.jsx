import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignUp from './components/SignUp.jsx'

const Hello = () => {
  return (
    <h1>Hello World</h1>
  );
};

const App = () => (
  <MuiThemeProvider>
  <SignUp/>
  </MuiThemeProvider>
);

render(<App />, document.getElementById('app'));
