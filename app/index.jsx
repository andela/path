import 'muicss/dist/css/mui.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import SignUp from './components/SignUp.jsx';
import LogIn from './components/LogIn.jsx';


const Hello = () => {
  const style = { height: '10px' };
  const space = { margin: '200px' };
  return (
    <div >
      <Appbar className="appbar"> Paths</ Appbar>
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
