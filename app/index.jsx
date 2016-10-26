import 'muicss/dist/css/mui.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import SignUp from './components/SignUp.jsx';

const Hello = () => {
  const style = { height: '10px' };
  const space = { margin: '200px' };
  return (
    <div >
      <Appbar style={{ backgroundColor: '#E0E0E0' }}> Paths</ Appbar>
      <Container fluid={false}>
        <div style={{ space }} >
          <br />
          <br />
          <SignUp />
        </div>
      </Container>
    </div>
     );
};

const App = () => (

  <Hello />
);

ReactDOM.render(<App />, document.getElementById('app'));
