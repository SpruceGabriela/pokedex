import React from 'react';
import Card from '../components/Card';
import MainContainer from '../components/MainContainer';
import Sidebar from '../components/Sidebar';

const Home = () => (
  <MainContainer>
    <Sidebar>
      <Sidebar.Item>
        Charizard
      </Sidebar.Item>
    </Sidebar>
    <div>
      <Card />
    </div>
  </MainContainer>
);

export default Home;
