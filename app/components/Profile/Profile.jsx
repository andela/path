/* eslint import/no-unresolved: "off"*/
/* eslint import/no-extraneous-dependencies: "off"*/
import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Button from 'muicss/lib/react/button';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import testAvatar from '../../images/test_avatar.jpg';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import DatePicker from 'material-ui/DatePicker';
import src from '../../images/MainLogo.png';
import './Profile.css';

const Profile = (props) => {
  return (
    <Row>
      <Col lg="9" sm="12" xs="12" md="12" >
        <Col xs-offset="2" lg="8" sm="12" xs="12" >
          <form onSubmit={props.onSubmit}>
            <Row className="profiler mui--z1" lg="3">
              <Col className="profilePic" lg="4" style={{ backgroundImage: 'url(/assets/73cf6e8ac0aca7020827a2796ed5aa89.jpg)', backgroundSize: 'cover' }} />
              <Col lg="3" className="" style={{ padding: '30px' }}>
                <TextField type="file" hintText="Upload Photo" underlineShow={false} />
              </Col>
            </Row>
            <Row className="profiler mui--z1">
              <TextField fullWidth hintText="First Name" name="first_name" />
              <TextField fullWidth hintText="Last Name" name="last_name" />
              <DatePicker fullWidth hintText="Date of birth" mode="landscape" />
              <TextField fullWidth hintText="Email" name="email" />
              <TextField fullWidth hintText="Tel" type="tel" name="Tel" />
            </Row>
            <Row className="profiler mui--z1">
              <FlatButton label="Upload " label="Upload C.V" labelPosition="before">
                <TextField type="file" name="CV" underlineShow={false} />
              </FlatButton>
              <SelectField fullWidth floatingLabelText="Highest Education Level Attained">
                <MenuItem value="college" primaryText="College" />
                <MenuItem value="university" primaryText="University" />
                <MenuItem value="high_school" primaryText="High School" />
                <MenuItem value="others" primaryText="others" />
              </SelectField>
              <TextField fullWidth hintText="Certifiction" name="Certifiction" />
              <TextField fullWidth hintText="Linkedin" name="linkedin" type="url" />
              <RaisedButton fullWidth type="submit" style={{ marginTop: '30px' }}
                primary label="Save"
              />
            </Row>
          </form>
        </Col>
      </Col>
    </Row>
  );
};

Profile.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

module.exports = Profile;
