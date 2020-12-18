import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const JsonDataArray = ({ jsonData }) => {
  const classes = useStyles();
  return (
    <div>
      <center><h1>Stations List</h1></center>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{fontWeight: 'bold'}}>label</TableCell>
            <TableCell align="right" style={{fontWeight: 'bold'}}>lat</TableCell>
            <TableCell align="right" style={{fontWeight: 'bold'}}>long</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {jsonData.map((singleLine) => (
          <TableRow key={singleLine.stationID}>
             <TableCell align="right">{singleLine.label}</TableCell>
              <TableCell align="right">{singleLine.location.lat}</TableCell>
              <TableCell align="right">{singleLine.location.lon}</TableCell>
          </TableRow>
      ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
};

export default JsonDataArray;