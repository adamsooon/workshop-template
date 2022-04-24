import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import {useEffect, useState} from "react";
import ContactsApi from "../api/contactApi";


function Users(){
  const [nationality, setNationality] =  useState('')
  const [gender, setGender] =  useState('')
  const [users, setUsers] = useState([])

useEffect(() => {
  ContactsApi(nationality, gender).then(res => {
        setUsers(res.data.results)
    })
    .catch((error) => {
        console.log(error);
    })
    }, [nationality, gender]);

  return (
      <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="nationality-select-label">Nationality</InputLabel>
          <Select
            labelId="nationality-select-label"
            id="nationality-select"
            value={nationality}
            label="Nationality"
            onChange={e => setNationality(e.target.value)}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='us'>USA</MenuItem>
            <MenuItem value='gb'>GB</MenuItem>
          </Select>
        </FormControl>
          </Box>
            <FormControl fullWidth>
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            value={gender}
            label="Gender"
            onChange={e=> setGender(e.target.value)}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
          </Select>
        </FormControl>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell align="right">Gender&nbsp;(g)</TableCell>
                <TableCell align="right">Nationality&nbsp;(g)</TableCell>
                <TableCell align="right">Email&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name.first} {user.name.last}
                  </TableCell>
                  <TableCell align="right">{user.gender}</TableCell>
                  <TableCell align="right">{user.nat}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}

export default Users