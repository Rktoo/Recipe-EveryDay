import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Recipe } from '../utils/useFetchRecipes';
import { useLikeContext } from '../utils/useLikeContext';


export default function RecipePage() {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { liked, checkItemLiked, saveItemLiked } = useLikeContext();
    const likeRef = useRef<HTMLSpanElement | null>(null);

    const likeRecipe = async (id: string) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/${id}/like`);
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

    const fetchRecipe = useCallback(async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/${id}`);
            setRecipe(response.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Erreur de chargement de la recette");
        } finally {
            setLoading(false);

        }
    }, [id]);

    useEffect(() => {
        fetchRecipe();
    }, [id, fetchRecipe]);

    useEffect(() => {
        if (recipe) {
            checkItemLiked(recipe?._id)
        }
    }, [recipe, checkItemLiked]);

    if (loading) return <p>Chargement....</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div className='my-10'>
            {recipe ? (
                <div className='container-recipe flex flex-col gap-2 p-4 rounded-xl border-[1px] backdrop-blur-[2px] ' >
                    <div className='flex flex-row justify-between items-center'>
                        <h1>{recipe.title}</h1>
                        <div className='flex flex-row  items-center gap-2 mr-8'>
                            <img src="/src/assets/svg/star.svg" alt="svg like" />
                            <span className='text-xl' ref={likeRef}>{recipe.like}</span>
                        </div>
                    </div>
                    <img src={`${import.meta.env.VITE_API_BASE_PUBLIC}${recipe.image}`} alt={recipe.title} className='rounded-lg shadow-lg' width={200} height={200} />
                    <div className='grid grid-cols-6 gap-10'>
                        <div className='col-span-2'>
                            <h2 className='text-lg font-semibold text-amber-400'>Ingrédients</h2>
                            <ul className='font-thin'>
                                {
                                    recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>- {ingredient}</li>
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
                                <span className='cursor-pointer hover:scale-110' onClick={() => likeRecipe(recipe._id)}>👍</span>
                            </div>
                            : <div className='flex flex-row justify-end items-center gap-2'>
                                <p className='text-green-400'>Vous aimez 😊</p>
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

