import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  wrapper: {
    padding: '0',
  },
  table: {
    marginTop: '50px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '150px',
  },
  filters: {
    marginTop: '50px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '20',
    display: 'flex'
  },
  header: {
    marginBottom: theme.spacing(2),
  },
}));
