import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Link } from "react-router-dom";
import {
  Button
} from "reactstrap";
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposit() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <div className="container">
    <div className="row justify-content-center">
      <span style={{ fontSize: 26,marginBottom: 20,marginTop: 10 } }><span style={ { color: '#ff6c31' } }>Add</span> another application</span> <br/>
      <p>To submit a new application click the button bellow.</p>
      <Button
        style={ { backgroundColor: '#ff6c31',color: 'white',fontWeight: 'bold' } }
        className="btn-round"
        color="success"
        size="lg"
        to="/Assocapp"
        tag={Link}
      >Add an application</Button>
      </div>
      </div>
    </React.Fragment>
  );
}
