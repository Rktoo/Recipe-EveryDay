import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Recipe = {
    id : string,
    title : string,
    image : string,
    ingredients : string[],
    instructions : string,
}

export default function RecipePage() {
    const {id} = useParams<{id : string}>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:6001/api/recipes/${id}`);
                setRecipe(response.data);
            }catch (err) {
                console.log(err);
                setError("Erreur de chargement de la recette");
            }finally {
                setLoading(false);
            }
        };

        fetchRecipe();

    }, [id]);

    if (loading) return <p>Chargement....</p>;
    if (error) return <p>Erreur : {error}</p>;

  return (
    <div className='my-4'>
        { recipe ? (
              <div className='container-recipe flex flex-col gap-2 p-4 rounded-xl border-[1px] backdrop-blur-[2px] ' >
                <h1>{recipe.title}</h1>
                  <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt={recipe.title} width={200} height={200}/>
                <h2 className='text-lg font-semibold text-amber-400'>Ingrédients</h2>
                <ul className='font-thin'>
                    {
                        recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))
                    }
                </ul>
                  <h2 className='text-lg font-semibold text-amber-400'>Instructions</h2>
                <p>{recipe.instructions}</p>
            </div>
        ) :(
<p>Recette non trouvée</p>
        )
    }
    </div>
  )
}