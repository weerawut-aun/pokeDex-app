import './App.css';
import 'boxicons';
import React, { Suspense, useState } from 'react';
import { Typesbar } from './components/Typesbar';
import PokemonContainer from './components/PokemonContainer';
import { Modal } from './components/Modal/Modal';
import { PokemonModalProvider } from './context/PokemonModalProvider';
import Loader from './components/Loader';
const App = () => {
  const [type, setType] = useState('ice');

  return (
    <Suspense fallback={<Loader />}>
      <PokemonModalProvider>
        <div className="container md:mx-auto flex flex-col items-center h-[100vh]">
          <h1 className="conatiner flex justify-center items-center text-7xl logo">
            Pokédex
          </h1>
          <Typesbar toggleType={setType} />
          <PokemonContainer type={type} />

          <Modal />
        </div>
      </PokemonModalProvider>
    </Suspense>
  );
};

export default App;
