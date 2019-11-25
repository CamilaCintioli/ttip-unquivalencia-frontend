
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    marginButton: theme.spacing(3),
  },
  selector: {
    marginBottom: theme.spacing(5),
  },
  error: {
    color: 'red',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },

}));


export default useStyles;
