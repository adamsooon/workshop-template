import './App.css';
import UsersTable from './components/UsersTable/UsersTable';
import {Box, Card, Grid} from '@material-ui/core';
import useStyles from './components/UsersTable/UsersTableStyles';


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Box className={classes.wrapper}>
        <Grid container className={classes.header}>
          <Grid item md={12}>
            <Card className={classes.table}>
              <UsersTable />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
