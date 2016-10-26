import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';

const SignUp = () => {
  const style = {
    paddingRight: '1px'};

  const child = { backgroundColor: '#038D6F',  padding:0,
minHeight:'300px'
};

const vcenter = {
color :'#fff',
backgroundColor:'#cfc',
display:'block',
marginLeft: 'auto',
marginRight:'auto',


height:'100px',

}
  return (

    <Row >
      <Col lg="9"  sm="12" xs="12" className="mui--align-middle " style={child}>
        <Col className="mui--text-center mui--hidden-md" lg="4"  >
          <div style={vcenter}>

             <h2 >register</h2>
          </div>

       </Col>
      <Col lg="6" sm="10" xs="12" className="mui--pull-right" style={style}>
        <Panel  style={{marginBottom:'1px'}}>
          <Form >
            <legend>Register </legend>
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
