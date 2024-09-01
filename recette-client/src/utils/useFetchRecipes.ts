import axios from "axios";
import { useEffect, useState } from "react";

export interface Recipe {
    _id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    image: string;
    like: string;
}

const useFetchRecipes = (query: string) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}`, {
                    params: { query }
                });
                setRecipes(response.data);
            } catch (err) {
                setError('Erreur de chargement des recettes.');
                console.error(err)
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [query]);

    return { recipes, loading, error, setRecipes };
};

export default useFetchRecipes;