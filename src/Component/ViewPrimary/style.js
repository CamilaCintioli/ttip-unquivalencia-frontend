import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: '100%',
  },
  tableWrapper: {
    maxHeight: 407,
    overflow: 'auto',
  },
  table: {
    minWidth: 650,
  },
});


export default useStyles;
