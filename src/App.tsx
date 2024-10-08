import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {

  const [isModalOpen,setIsModalOpen]=useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={handleModalOpen} id="modal-open-button" className="block text-white bg-blue-700 hover:bg-blue-800 hidden" type="button">Open Modal</button>
      <Modal onClose={handleModalClose} isOpen={isModalOpen}/>
    </div>
  );
}

export default App;
