import { useState } from 'react'
import useFetchRecipes from '../utils/useFetchRecipes';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import axios from 'axios';


export default function Recipes() {
    const [query, setQuery] = useState<string>('');
    const { recipes, loading, error, setRecipes } = useFetchRecipes(query);

    const handleSearch = async (query: string) => {
        try {
            if(query.trim() === ""){
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}`);
                setRecipes(response.data);
            } else {
            setQuery(query);
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
            
            setRecipes(response.data);
            }
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div >
            <div className='title border-[1px] border-white rounded-xl backdrop-blur-md'>
                <h1 className='text-center my-4 mx-2'>Liste des recettes</h1>
            </div>
            <div className='w-full flex justify-center'>
                <SearchBar onSearch={handleSearch} />
            </div>
            {
                (loading && recipes.length < 1) && <p className='container-recipe mt-4'>Chargement...</p>
            }

            {
                error && <div className='container-recipe mt-4'><p>{error}</p></div>
            }

            <RecipeList recipes={recipes} />
        </div>
    )
}