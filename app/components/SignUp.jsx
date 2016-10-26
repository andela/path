import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
const src = require('file!../images/MainLogo.png');

const SignUp = () => {
  const style = {
    paddingRight: '1px'};

  const child = { backgroundColor: '#038D6F',  padding:0,
minHeight:'300px'
};

const vcenter = {
color :'#fff',
display:'block',
marginLeft: 'auto',
marginRight:'auto',
height:'100px',

}
  return (

    <Row >
      <Col lg="8"  sm="12" xs="12" style={child}>
        <Col className="mui--pull-left" lg="4">
          <div style={vcenter}>
            <img src={src}/>
             <h2 >register</h2>
          </div>
       </Col>
      <Col lg="7" sm="12" xs="12"  className="mui--pull-right" style={child}>
        <Panel  style={{marginBottom:'1px'}}>
          <Form >

            <Input hint="First Name" />
            <Input hint="Last Name" />
            <Input hint="Email" />
            <Input hint="Password" />
            <Input hint="Confirm Password" />
            <Button variant="raised">Submit</Button>
          </Form>
        </Panel>
      </Col>
</Col>
    </Row>

  );
};

module.exports = SignUp;
