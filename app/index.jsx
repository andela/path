import 'muicss/dist/css/mui.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

const Hello = () => {
  const space = { margin: '200px' };
  return (
    <div >
      <Appbar className="appbar">Paths</Appbar>
      <Container fluid={false}>
        <div style={{ space }} >
          <br />
          <br />
          <SignUp />
          <br />
          <br />
          <h2> Login </h2>
          <LogIn />

        </div>
      </Container>
    </div>
     );
};

const App = () => (
  <Hello />
);

ReactDOM.render(<App />, document.getElementById('app'));
