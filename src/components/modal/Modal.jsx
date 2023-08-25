import React from 'react';
import { usePokemonModal } from '../../context/PokemonModalProvider';
import { IntrolModal } from './IntrolModal';
import { TabConatainer } from './TabContainer';
import * as Dialog from '@radix-ui/react-dialog';

export const Modal = () => {
  const { isModalOpen, closeModal, currentPokemon } = usePokemonModal();

  return (
    <Dialog.Root
      open={isModalOpen}
      onOpenChange={(isOpen) => !isOpen && closeModal()}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center" />
        <Dialog.Content
          data-content={currentPokemon?.name}
          className={`fixed modal ${currentPokemon?.types[0]?.name} flex flex-col top-1/2  left-1/2 -translate-x-2/4  
          -translate-y-2/4 w-[90%]  md:w-3/5    rounded-3xl bg-current overflow-hidden `}
        >
          <IntrolModal />
          <TabConatainer />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
