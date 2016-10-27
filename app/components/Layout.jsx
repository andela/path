import React, { PropTypes } from 'react';
import Container from 'muicss/lib/react/container';
import Header from './Header';

const Layout = (props) => {
  return (
    <div >
      <Header />
      <Container fluid={false}>
        {props.children}
      </Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
