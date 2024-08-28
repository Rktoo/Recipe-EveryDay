import React, { useState } from 'react'
import useFetchRecipes from '../utils/useFetchRecipes';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';


export default function Home() {
    const [query, setQuery] = useState<string>('');
    const { recipes, loading, error,setRecipes } = useFetchRecipes(query);

    const handleSearch = async (query:string)=> {
        try {
            const response = await fetch(`/api/recipes/search?q=${encodeURIComponent(query)}`)
            setQuery(query);
            // if(!response.ok){
            //     throw new Error("Erreur lors de la recherche de recette");
            // }

            const data = await response.json();
            console.log(data)
            setRecipes(data);
        }catch (err) {
            console.error(err);
        }
    };


  return (
    <div>
        <h1 className='mb-4'>Liste des recettes</h1>
        <SearchBar onSearch={handleSearch}/>

        {
            loading && <p>Chargement...</p>
        }

        {
            error && <p>Erreur : {error}</p>
        }
        
        <RecipeList recipes={recipes}/>
    </div>
  )
}