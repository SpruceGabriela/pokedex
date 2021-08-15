import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import MainContainer from '../components/MainContainer';
import Sidebar from '../components/Sidebar';
import { getPokemons } from '../services/api';
import { Pokemons } from '../types/pokemons';

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  useEffect(() => {
    getPokemons().then((data) => setPokemons(data));
  }, []);

  if (!pokemons) return <p>loading</p>;
  return (
    <MainContainer>
      <Sidebar>
        <Sidebar.Item>
          Charizard
        </Sidebar.Item>
      </Sidebar>
      <div>
        {pokemons?.map(({ id, name }) => <Card id={id} name={name} />)}
      </div>
    </MainContainer>
  );
};

export default Home;
