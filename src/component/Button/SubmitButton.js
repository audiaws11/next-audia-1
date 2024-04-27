import React from 'react';

function SubmitButton({ title, onClick, loading }) {
    return (
        <button
            type="submit"
            onClick={onClick}
            disabled={loading}
            style={{ background: '#CC3333' }}
            className={`${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"} text-white font-medium py-2 px-4 rounded-lg w-full transition-colors duration-150`}
        >
            {loading ? 'Submitting...' : title}
        </button>
    );
}

export default SubmitButton;
