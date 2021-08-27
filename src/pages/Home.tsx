import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import MainContainer from '../components/MainContainer';
import Sidebar from '../components/Sidebar';
import { Grid } from '../components/Grid';
import Modal from '../components/Modal';
import { getPokemons, getPokemonsTypes } from '../services/api';
import { Pokemons } from '../types/pokemons';
import { PokemonTypes } from '../types/pokemonsTypes';

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [typesList, setTypesList] = useState<PokemonTypes[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  useEffect(() => {
    getPokemonsTypes().then((data) => {
      setTypesList(data);
    });
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // TODO: adjust loading and error state

  if (!pokemons) return <p>loading</p>;
  return (
    <MainContainer>
      <Modal showModal={showModal} closeModal={handleCloseModal} />
      <Sidebar>
        { typesList.length ? (typesList?.map((type) => (
          <Sidebar.Item key={type.name} backgroundColor={type?.name}>
            {type.name}
          </Sidebar.Item>
        ))) : <p>loading</p>}

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
            onClick={handleShowModal}
          />
        ))}
      </Grid>
    </MainContainer>
  );
};

export default Home;
