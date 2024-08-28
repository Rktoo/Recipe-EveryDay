import { Link } from 'react-router-dom';

type Recipe = {
    _id: string,
    title: string,
    image: string,
    ingredients: string[],
}

type RecipeListProps = {
    recipes : Recipe[]
}
export default function RecipeList({recipes }: RecipeListProps) {

    return (
        <div className="recipe-list my-4 flex justify-center">
            {recipes.length === 0 ? (
                <p>Aucune recette trouvée.</p>
            ) : (
                    <ul className='container-recipe flex flex-row flex-wrap gap-4 justify-center border p-2 rounded-xl backdrop-blur-[2px] '>
                    {recipes.map((recipe) => (
                        <li key={recipe._id} className="recipe-item">
                            <Link to={`/recipes/${recipe._id}`} className="recipe-link text-white hover:text-white">
                                <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt={recipe.title} className="recipe-image hover:animate-pulse hover:scale-110 transition-all duration-200 ease-in-out rounded-lg" />
                                <h2 className="recipe-title">{recipe.title}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}