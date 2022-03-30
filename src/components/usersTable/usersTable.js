import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";


export default function UsersTable({
  users
}) {
  return (
    <TableContainer>
      <Table sx={{minWidth: 700}} aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell alignRight>Email</TableCell>
            <TableCell alignRight>Cell</TableCell>
            <TableCell alignRight>Gender</TableCell>
            <TableCell alignRight>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map(
              (user) => (
                <TableRow key={Math.random().toString(36).substring(7)}>
                  <TableCell>{`${user.name.title} ${user.name.first} ${user.name.last}`}</TableCell>
                  <TableCell alignRight>{user.email}</TableCell>
                  <TableCell alignRight>{user.cell}</TableCell>
                  <TableCell alignRight>{user.gender}</TableCell>
                  <TableCell alignRight>{user.nat}</TableCell>
                </TableRow>
              )
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
