import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import SideNav, {
  NavItem, NavIcon, NavText,
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Home = () => (
  <div>
      homeSADDDDDDDDDDDDDDDDDDSDDSDSD
  </div>
);


function Layout() {
  return (
    <Router>
      <Route render={({ location, history }) => (
        <>
          <SideNav
            onSelect={(selected) => {
              const to = `/${selected}`;
              if (location.pathname !== to) {
                history.push(to);
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                            Home
                </NavText>
              </NavItem>
              <NavItem eventKey="file">
                <NavIcon>
                  <i className="fa fa-fw fa-archive" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                            Expedientes
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main>
            <div>
              <Container>
                <Row className="justify-content-md-center">
                  <Route path="/home" exact component={(props) => <Home />} />
                </Row>
              </Container>
            </div>

          </main>
        </>
      )}
      />
    </Router>
  );
}

export default Layout;
