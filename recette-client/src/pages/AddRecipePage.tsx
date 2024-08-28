import React, { useState } from 'react';
import axios from 'axios';

const AddRecipePage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [ingredients, setIngredients] = useState<string>('');
    const [instructions, setInstructions] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await axios.post('https://api.recipes.com/add', {
                title,
                ingredients: ingredients.split('\n'),
                instructions,
                image,
            });
            setSuccess('Recette ajoutée avec succès !');
        } catch (err) {
            setError("Erreur lors de l'ajout de la recette : " + err);
        }
    };

    return (
        <div>
            <h1>Ajouter une Recette</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titre:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Ingrédients (un par ligne):</label>
                    <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                </div>
                <div>
                    <label>Instructions:</label>
                    <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type="submit">Ajouter</button>
            </form>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default AddRecipePage;
