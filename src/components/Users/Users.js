import {Box, Card, CircularProgress, Grid} from '@material-ui/core';
import UsersTable from './UsersTable/UsersTable';
import useStyles from './UsersTable/UsersTableStyles';
import CustomSelect from './CustomSelect';
import {useEffect, useState} from 'react';
import ContactsApi from '../../api/contactApi';

function Users(){
  const classes = useStyles();
    const nationalities = [
    {'key': '', 'value': 'All countries'},
    {'key': 'us', 'value': 'USA'},
    {'key': 'gb', 'value': 'Great Britian'},
  ]
  const [nationality, setNationality] = useState('');
  const handleSetNationality = selectedNationality => {
    setNationality(selectedNationality);
  }
  const [users, setUsers] = useState([]);
  const genders = [
    {'key': '', 'value': 'All genders'},
    {'key': 'male', 'value': 'Male'},
    {'key': 'female', 'value': 'Female'},
  ]
  const [gender, setGender] = useState('');
  const handleSetGender = selectedGender => {
    setGender(selectedGender);
  }
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    ContactsApi(nationality, gender).then(
      response => setUsers(response.data.results)
    ).finally(
      setIsLoading(false)
    )
  }, [nationality, gender]);

  return (
    <Box className={classes.wrapper}>
        <Grid container className={classes.header}>
          <Grid item md={12} className={classes.filters}>
            <CustomSelect values={nationalities} header={'Nationality'} value={nationality} handleChange={handleSetNationality}/>
            <CustomSelect values={genders} header={'Gender'} value={gender} handleChange={handleSetGender}/>
          </Grid>
          <Grid item md={12}>
            <Card className={classes.table}>
              {isLoading ? <CircularProgress /> : <UsersTable users={users}/>}
            </Card>
          </Grid>
        </Grid>
      </Box>
  )
}
export default Users;
