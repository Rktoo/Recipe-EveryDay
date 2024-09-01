import { Link } from "react-router-dom";
import { Recipe } from "../utils/useFetchRecipes";

type RecipeListProps = {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeListProps) {

  return (
      <li key={recipe._id} className="recipe-item">
          <Link to={`/recipes/${recipe._id}`} className="recipe-link text-white hover:text-white">
              <img src={`${import.meta.env.VITE_API_BASE_PUBLIC}${recipe.image}`} alt={recipe.title} className="recipe-image w-52 h-40 hover:animate-pulse hover:scale-110 transition-all duration-200 ease-in-out rounded-lg shadow-lg" />
              <div className='flex flex-row justify-between'>
                  <h2 className="recipe-title">{recipe.title}</h2>
                  <div className='flex flex-row items-center gap-2'>
                      <img src="src/assets/svg/star.svg" alt="star" className="w-6 h-5 text-stone-800 overflow-hidden " />
                      <p>{recipe.like}</p>
                      
                  </div>
              </div>
          </Link>
      </li>
  )
}