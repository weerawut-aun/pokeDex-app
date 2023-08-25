import { createContext, useContext, useState } from 'react';

export const PokemonContext = createContext();

export const usePokemonModal = () => {
  return useContext(PokemonContext);
};

export const PokemonModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ isOpen: false, pokemon: null });

  const value = {
    currentPokemon: modal.pokemon,
    openModal: (pokemon) => setModal({ isOpen: true, pokemon }),
    isModalOpen: modal.isOpen,
    closeModal: () => setModal((prev) => ({ ...prev, isOpen: false })),
  };
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
