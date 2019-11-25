import { makeStyles } from '@material-ui/styles';

const styleCard = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
    },
    content: {
        alignItems: 'center',
        display: 'flex',
    },
    title: {
        fontWeight: 700,
    },
    avatar: {
        height: 56,
        width: 56,
        backgroundColor: '#36A2EB',
    },
    icon: {
        height: 32,
        width: 32,
        backgroundColor: '#36A2EB',
        hoverBackgroundColor: '#36A2EB',
    },
    difference: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export default styleCard;