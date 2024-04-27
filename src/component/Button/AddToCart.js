import React from 'react';

function AddToCartButton({ onClick, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled} className="px-2 py-2 text-white hover:bg-blue-200 rounded-lg" style={{background: '#CC3333'}}>
            Add to Cart
        </button>
    );
}

export default AddToCartButton;
