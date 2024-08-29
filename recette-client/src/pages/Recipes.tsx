import { useState } from 'react'
import useFetchRecipes from '../utils/useFetchRecipes';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';


export default function Recipes() {
    const [query, setQuery] = useState<string>('');
    const { recipes, loading, error, setRecipes } = useFetchRecipes(query);

    const handleSearch = async (query: string) => {
        try {
            const response = await fetch(`/api/recipes/search?q=${encodeURIComponent(query)}`)
            setQuery(query);
            // if(!response.ok){
            //     throw new Error("Erreur lors de la recherche de recette");
            // }

            const data = await response.json();
            console.log(data)
            setRecipes(data);
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div >
            <div className='title border-[1px] border-white rounded-xl backdrop-blur-md'>
                <h1 className='my-4 text-center '>Liste des recettes</h1>
            </div>
            <div className='w-full flex justify-center'>
                <SearchBar onSearch={handleSearch} />
            </div>
            {
                loading && <p>Chargement...</p>
            }

            {
                error && <div className='h-screen'><p>Erreur : {error}</p></div>
            }

            <RecipeList recipes={recipes} />
        </div>
    )
}