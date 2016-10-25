import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


const Hello = () => {
  return (
    <div>
      <Appbar > Paths</ Appbar>
      <Container fluid={false}>
        <Button color="primary">button</Button>
      </Container>
    </div>
     );
};

const App = () => (

  <Hello />

);

ReactDOM.render(<App />, document.getElementById('app'));
