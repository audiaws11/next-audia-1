import axios from "axios";
import { useState } from "react";
import SubmitButton from "./Button/SubmitButton";
import TextInput from "./TextInput/TextInput";
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
                    <TextInput label="Name" id="name" name="nameFood" defaultValue={defaultName} placeholder="Name of food" type="text" />
                </div>
                <div className="mb-4">
                    <TextInput label="URL Image" id="food" name="foodImage" defaultValue={defaultUrl} placeholder="URL image" type="url" />
                </div>
                <div className="mb-4">
                    <TextInput label="Description" id="description" name="descriptionFood" defaultValue={defaultDescription} placeholder="Description" type="text" />
                </div>
                <div className="mb-4">
                    <TextInput label="Ingredients" id="ingredients" name="ingredientsFood" defaultValue={defaultIngredients} placeholder="Ingredients" type="text" />
                </div>
                <SubmitButton title={title} loading={loading} />
            </form>
        </div>
    </div>
    );
}