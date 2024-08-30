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
            const data = await response.json();
            setRecipes(data);
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className='-mt-[6.5rem] min-[550px]:-mt-[2rem] lg:-mt-[1.2rem]'>
            <div className='title border-[1px] border-white rounded-xl backdrop-blur-md'>
                <h1 className='text-center my-4 mx-2'>Liste des recettes</h1>
            </div>
            <div className='w-full flex justify-center'>
                <SearchBar onSearch={handleSearch} />
            </div>
            {
                loading && <p className='mt-4'>Chargement...</p>
            }

            {
                error && <div className='container-recipe mt-4'><p>{error}</p></div>
            }

            <RecipeList recipes={recipes} />
        </div>
    )
}