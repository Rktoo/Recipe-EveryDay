import { useEffect, useRef } from "react";
import RecipeList from "../components/RecipeList";
import useFetchRecipes from "../utils/useFetchRecipes"
import { animateElement } from "../utils/animateElement";


export default function Popular() {
  const { error, loading, recipes } = useFetchRecipes("");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    animateElement(containerRef)
  }, [])

  return (
    <div className={` ${loading || error ? " h-screen" : ""}`}>
      <div 
        ref={containerRef}
      className='title border-[1px] border-white rounded-xl backdrop-blur-md opacity-0'>
        <h1 className='my-4 text-center '>Les recettes populaires</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2">
        {
          (loading && recipes.length < 1) && <p className='container-recipe mt-4'>Chargement...</p>
        }
        {
          error && <div className='container-recipe mt-4'><p>{error.replace(".", "")} populaires.</p></div>
        }
        {
          recipes && recipes.map(recipe => {
            if (Number(recipe.like) >= 5) {
              const recipesPop = [];
              recipesPop.push(recipe)
              return (
                <RecipeList recipes={recipesPop} key={recipe._id} />
              )
            }
          })
        }
      </div>
    </div>
  )
}