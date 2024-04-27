import React from 'react';

function ModalToggleButton({ isModalOpen, setIsModalOpen, foodName }) {
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    
    return (
        <button onClick={toggleModal} className="bg-gray-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-lg">
            {isModalOpen ? `Close ${foodName}` : `Update ${foodName}`}
        </button>
    );
}

export default ModalToggleButton;
