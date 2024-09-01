import { Recipe } from '../utils/useFetchRecipes';
import RecipeCard from './recipeCard';


type RecipeListProps = {
    recipes: Recipe[]
}
export default function RecipeList({ recipes }: RecipeListProps) {

    return (
        <div className="recipe-list my-4 flex justify-center">
            {recipes.length === 0 ? (
                <div className='h-[42vh]'><p className='container-recipe'>Aucune recette trouvée.</p></div>
            ) : (
                <ul className='container-recipe flex flex-row flex-wrap gap-4 justify-center border p-2 rounded-xl backdrop-blur-[2px] '>
                    {recipes.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe._id} />
                    ))}
                </ul>
            )}
        </div>
    );
}