import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import './Profile.css';

const Profile = (props) => {
  return (
    <Row>
      <Col lg-offset="1" lg="10" sm="12" xs="12" md="12" >
        <Col xs-offset="2" lg="8" sm="12" xs="12" >
          <Form onSubmit={props.onSubmit}>
            <Row className="profiler mui--z1" lg="3">
              <Col className="profilePic" lg="4" style={{ backgroundImage: 'url(/assets/73cf6e8ac0aca7020827a2796ed5aa89.jpg)', backgroundSize: 'cover' }} />
              <Col lg="6" className="" style={{ padding: '50px' }}>
                <input type="file" hint="Upload Photo" />
              </Col>
            </Row>
            <Row className=" profiler mui--z1">
              <Input hint="First Name" name="first_name" />
              <Input hint="Last Name" name="last_name" />
              <Input hint="Email" name="email" />
              <Input hint="Date of birth" type="date" name="DOB" />
              <Input hint="Tel" type="tel" name="Tel" />
            </Row>
            <Row className=" profiler mui--z1">
              <Row >
                <Col lg="3" sm="3" xs="3" md="3"> Upload C.V</Col>
                <Col lg="6" sm="6" xs="6" md="6" >
                  <input type="file" hint="Upload CV" name="CV" />
                </Col>
              </Row>
              <Input hint="Last Name" name="last_name" />
              <Input hint="Linkedin" name="linkedin" type="url" />
              <Select >
                <Option value="college" label="College" />
                <Option value="university" label="University" />
                <Option value="high_school" label="High School" />
                <Option value="others" label="others" />
              </Select>
              <Button variant="raised" className="mui--pull-right" color="primary">Save</Button>
            </Row>
          </Form>
        </Col>
      </Col>
    </Row>
  );
};

Profile.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

module.exports = Profile;
