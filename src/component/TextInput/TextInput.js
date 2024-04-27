import React from 'react';

function TextInput({ label, id, name, defaultValue, placeholder, type }) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-600">{label}</label>
            <input
                defaultValue={defaultValue}
                placeholder={placeholder}
                type={type}
                id={id}
                name={name}
                className="mt-1 p-2 border-2 border-gray-300 rounded-lg w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
        </div>
    );
}

export default TextInput;
