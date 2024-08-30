import { Link } from "react-router-dom";
import { Recipe } from "../utils/useFetchRecipes";

type RecipeListProps = {
    recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeListProps) {

  return (
      <li key={recipe._id} className="recipe-item">
          <Link to={`/recipes/${recipe._id}`} className="recipe-link text-white hover:text-white">
              <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt={recipe.title} className="recipe-image w-52 hover:animate-pulse hover:scale-110 transition-all duration-200 ease-in-out rounded-lg" />
              <div className='flex flex-row justify-between'>
                  <h2 className="recipe-title">{recipe.title}</h2>
                  <div className='flex flex-row items-center gap-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5 text-stone-800 overflow-hidden " fill="rgb(251 191 36)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                      <p>{recipe.like}</p>
                  </div>
              </div>
          </Link>
      </li>
  )
}