import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '005', 'House donator application', '31st may 2020', 'Not Applicable', "waiting evaluation"),
  createData(1, '004', 'House donator application', '09th may 2020', '13rd may 2020', "matched"),
  createData(2, '003', 'House donator application', '24th april 2020', '28th april 2020', "in use"),
  createData(3, '002', 'House donator application', '17th march 2020', '20th march 2020', "in use"),
  createData(4, '001', 'House donator application', '2nd junuary 2020', '7th junuary 2020', "in use"),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Applications</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Submission date</TableCell>
            <TableCell>Matching date</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
