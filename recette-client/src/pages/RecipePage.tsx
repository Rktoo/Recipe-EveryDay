import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Recipe } from '../utils/useFetchRecipes';
import { useLikeContext } from '../utils/useLikeContext';


export default function RecipePage() {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { liked, checkItemLiked, saveItemLiked } = useLikeContext();
    const likeRef = useRef();

    const likeRecipe = async (id: string) => {
        try {
            const response = await axios.get(`http://localhost:6001/api/recipes/${id}/like`);
            if (!response.data) return;
            if (likeRef.current) {
                likeRef.current.textContent = String(Number(likeRef.current.textContent) + 1);
            }
            saveItemLiked(id);
            fetchRecipe();
        } catch (error) {
            console.error("Erreur : ", error);
        }
    }

    const fetchRecipe = async () => {
        try {
            const response = await axios.get(`http://localhost:6001/api/recipes/${id}`);
            setRecipe(response.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Erreur de chargement de la recette");
        } finally {
            setLoading(false);

        }
    };

    useEffect(() => {
        fetchRecipe();
    }, [id]);

    useEffect(() => {
        checkItemLiked(recipe?._id)
    }, [recipe]);

    if (loading) return <p>Chargement....</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div className='my-10'>
            {recipe ? (
                <div className='container-recipe flex flex-col gap-2 p-4 rounded-xl border-[1px] backdrop-blur-[2px] ' >
                    <div className='flex flex-row justify-between items-center'>
                        <h1>{recipe.title}</h1>
                        <div className='flex flex-row  items-center gap-2 mr-5'>
                            <img src="/src/assets/svg/star.svg" alt="svg like" />
                            <p className='text-xl' ref={likeRef}>{Number(recipe.like)}</p>
                        </div>
                    </div>
                    <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt={recipe.title} width={200} height={200} />
                    <div className='grid grid-cols-6 gap-10'>
                        <div className='col-span-2'>
                            <h2 className='text-lg font-semibold text-amber-400'>Ingrédients</h2>
                            <ul className='font-thin'>
                                {
                                    recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='col-span-4'>
                        <h2 className='text-lg font-semibold text-amber-400'>Instructions</h2>
                        <p>{recipe.instructions}</p>
                 
                        </div>
                        
                    </div>
                    {
                        liked === false ?
                        <div className='flex flex-row justify-end items-center gap-2'>
                            <p>Avez-vous aimé ?</p>
                            <span className='cursor-pointer' onClick={() => likeRecipe(recipe._id)}>👍</span>
                        </div>
                            : <div className='flex flex-row justify-end items-center gap-2'>
                            <p className='text-green-400'>Vous aimez</p>
                        </div>
                    }
                </div>
            ) : (
                <p>Recette non trouvée</p>
            )
            }
        </div>
    )
}

