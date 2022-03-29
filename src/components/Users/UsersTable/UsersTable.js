import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import PropTypes from 'prop-types';


function UsersTable({users}){
  return (
    <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Cell</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Nationality</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow
                  key='1'
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.firstname} {row.lastname}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.cell}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell >{row.nat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  )
}
UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
};
export default UsersTable;
