import RecipeList from "../components/RecipeList";
import useFetchRecipes from "../utils/useFetchRecipes"


export default function Popular() {
  const { recipes } = useFetchRecipes("");

  return (
    <div className="">
      <div className='title border-[1px] border-white rounded-xl backdrop-blur-md'>
        <h1 className='my-4 text-center '>Les recettes populaires</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2">
        {
          recipes && recipes.map(recipe => {

            if (Number(recipe.like) > 10) {
              const recipesPop = [];
              recipesPop.push(recipe)
              return (
                <RecipeList recipes={recipesPop} />
              )
            }
          })
        }
      </div>
    </div>
  )
}