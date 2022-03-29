import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {List} from 'immutable';
import {useState} from 'react';


function UsersTable(){
    const [users, setUsers] = useState([1, 2]);

  return (
    <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Cell</TableCell>
                <TableCell>Gebder</TableCell>
                <TableCell>Nationality</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>row.name</TableCell>
                  <TableCell>row.calories</TableCell>
                  <TableCell>row.fat</TableCell>
                  <TableCell>row.carbs</TableCell>
                  <TableCell >row.protein</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  )
}
export default UsersTable;
