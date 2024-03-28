import axios from "axios";
import { useState } from "react";
export default function FoodForm(props) {
    const {title, defaultName, defaultUrl, defaultDescription,defaultIngredients, onSubmitFood, loading} = props;
    const handleCreate = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('nameFood');
        const image = formData.get('foodImage');
        const description = formData.get('descriptionFood');
        const ingredients = formData.get('ingredientsFood');
        
       onSubmitFood({name, imageUrl: image, description: description, ingredients: [ingredients]});
    }
   
   
    return (
        <div className="flex justify-center">
        <div className="max-w-md mx-auto max-w-lg bg-white shadow-lg rounded-lg border-2 border-gray-200">
            <form onSubmit={handleCreate} className="p-8 bg-gray-100 rounded-lg shadow-lg bg-white">
                <h5 className="text-xl font-bold mb-6 text-center">{title}</h5>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name:</label>
                    <input defaultValue={defaultName} placeholder="Name of food" type="text" id="name" name="nameFood" className="mt-1 p-2 border-2 border-gray-300 rounded-lg w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="food" className="block text-sm font-medium text-gray-600">URL Image:</label>
                    <input defaultValue={defaultUrl} placeholder="URL image" type="url" id="food" name="foodImage" className="mt-1 p-2 border-2 border-gray-300 rounded-md w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                    <input defaultValue={defaultDescription} placeholder="Description" type="text" id="description" name="descriptionFood" className="mt-1 p-2 border-2 border-gray-300 rounded-md w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-sm font-medium text-gray-600">Ingredients</label>
                    <input defaultValue={defaultIngredients} placeholder="Ingredients" type="text" id="ingredients" name="ingredientsFood" className="mt-1 p-2 border-2 border-gray-300 rounded-md w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <button type="submit" disabled={loading} style={{background: '#CC3333'}} className={`${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"} text-white font-medium py-2 px-4 rounded-lg w-full transition-colors duration-150`}>{loading ? 'Submitting...' : title}</button>
            </form>
        </div>
    </div>
    );
}