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
        <div className="recipe-list my-4">
            {recipes.length === 0 ? (
                <p>Aucune recette trouvée.</p>
            ) : (
                <ul className='grid sm: grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center'>
                    {recipes.map((recipe) => (
                        <li key={recipe._id} className="recipe-item">
                            <Link to={`/recipes/${recipe._id}`} className="recipe-link">
                                <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt={recipe.title} className="recipe-image" />
                                <h2 className="recipe-title">{recipe.title}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}