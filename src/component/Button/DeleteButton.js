import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function DeleteButton({ onClick, foodName}) {
    return (
        <button 
            onClick={onClick} 
            className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg">
            Delete {foodName}
        </button>
    );
}

export default DeleteButton;
