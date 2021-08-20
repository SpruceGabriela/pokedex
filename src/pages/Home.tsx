import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import MainContainer from '../components/MainContainer';
import Sidebar from '../components/Sidebar';
import { Grid } from '../components/Grid';
import { getPokemons } from '../services/api';
import { Pokemons } from '../types/pokemons';

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  if (!pokemons) return <p>loading</p>;
  return (
    <MainContainer>
      <Sidebar>
        <Sidebar.Item>
          Charizard
        </Sidebar.Item>
      </Sidebar>
      <Grid>
        {pokemons?.map(({
          id,
          name,
          types,
          abilities,
          genus,
        }) => (
          <Card
            key={id}
            id={id}
            name={name}
            types={types}
            abilities={abilities}
            genus={genus}
          />
        ))}
      </Grid>
    </MainContainer>
  );
};

export default Home;
