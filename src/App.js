import './App.css';
import { useEffect, useState } from "react";
import UsersTable from "./components/usersTable/usersTable";
import {Box, CircularProgress, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import ContactsApi from "./api/contactApi";

// const users = [{
//   name: "John",
//   email: "example@example.com",
//   cell: "wtf",
//   gender: "n/a",
//   nationality: "earth",
// }]

function App() {
  const [filterNationality, setFilterNationality] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSetFilterNationality = (e) => {
    setFilterNationality(e.target.value);
  };
  const handleSetFilterGender = (e) => {
    setFilterGender(e.target.value)
  };

  useEffect(() => {
    setIsLoading(true);
    ContactsApi(filterNationality, filterGender)
      .then(( data ) => {
        setUsers(data.data.results);
        setIsLoading(false);
      })

    return () => {};
  }, [filterNationality, filterGender]);

  return (
    <div className="App">
      { isLoading ? <CircularProgress/>  : <Box/> }
      <Box style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        }}
      >
        <FormControl colSpan={6} fullWidth>
          <InputLabel variant="standard">Nationality</InputLabel>
          <Select
            defaultValue={''}
            onChange={handleSetFilterNationality}
          >
            <MenuItem value={'us'}>USA</MenuItem>
            <MenuItem value={'gb'}>Great Britain</MenuItem>
          </Select>
        </FormControl>
        <FormControl colSpan={6} fullWidth>
          <InputLabel variant="standard">Gender</InputLabel>
          <Select
            defaultValue={''}
            onChange={handleSetFilterGender}
          >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <UsersTable users={users}/>
    </div>
  );
}

export default App;
