import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import Footer from './dashboard/Footer';
import Nav from './dashboard/Nav';
import SideBar from './dashboard/Sidebar';
import Layout from './Layout/Layout';
import useStyles from './dashboard/style';


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    console.log('open SideBar');
    setOpen(true);
  };
  const handleDrawerClose = () => {
    console.log('close SideBar');
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav classes={classes} handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideBar classes={classes} handleDrawerClose={handleDrawerClose} open={open} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Layout />
        </Container>
        <Footer classes={classes} />
      </main>
    </div>
  );
}
