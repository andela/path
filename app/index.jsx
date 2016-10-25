import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Hello = () => {
  return (
    <h1>Hello World</h1>
  );
};

const App = () => (
  <MuiThemeProvider>
    <Hello />
  </MuiThemeProvider>
);

render(<App />, document.getElementById('app'));
