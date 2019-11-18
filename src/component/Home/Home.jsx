import React from 'react';
import { Image as ImageBootstrap } from 'react-bootstrap';
import Logo from './logo.jpeg';

const Home = () => (
  <div className="row justify-content-md-center">
    <ImageBootstrap src={Logo} className=" img-fluid" alt="Responsive image" />
  </div>
);

export default Home;
