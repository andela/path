import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

const SignUp = () => {
  return (
    <Card>
      <CardHeader
        title="Sign Up"
        subtitle="User signup"
        avatar="images/jsa-128.jpg"
      />
      <CardText>

        <co>
          <TextField hintText="First Name" fullWidth />
        </div>
        <Divider />

        <div>
          <TextField hintText="Last Name" fullWidth />
        </div>
        <Divider />

        <div>
          <TextField hintText="First Name" fullWidth />
        </div>
        <Divider />

        <div>
          <TextField hintText="Password" fullWidth />
        </div>
        <Divider />

        <div>
          <TextField hintText="Confirm Password" fullWidth />
        </div>


      </CardText>


    </Card>
  );
};

module.exports = SignUp;
