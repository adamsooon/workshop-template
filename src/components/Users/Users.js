import {Box, Card, Grid} from '@material-ui/core';
import UsersTable from './UsersTable/UsersTable';
import useStyles from './UsersTable/UsersTableStyles';
import CustomSelect from './CustomSelect';
import {useCallback, useState} from 'react';

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

  const genders = [
    {'key': '', 'value': 'All genders'},
    {'key': 'Male', 'value': 'Male'},
    {'key': 'Female', 'value': 'Female'},
  ]
  const [gender, setGender] = useState('');
  const handleSetGender = selectedGender => {
    setGender(selectedGender);
  }

  return (
    <Box className={classes.wrapper}>
        <Grid container className={classes.header}>
          <Grid item md={12} className={classes.filters}>
            <CustomSelect values={nationalities} header={'Nationality'} value={nationality} handleChange={handleSetNationality}/>
            <CustomSelect values={genders} header={'Gender'} value={gender} handleChange={handleSetGender}/>
          </Grid>
          <Grid item md={12}>
            <Card className={classes.table}>
              <UsersTable/>
            </Card>
          </Grid>
        </Grid>
      </Box>
  )
}
export default Users;
