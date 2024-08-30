import RecipeList from "../components/RecipeList";
import useFetchRecipes from "../utils/useFetchRecipes"


export default function Popular() {
  const {recipes} = useFetchRecipes("");

  return (
    <div className="h-screen ">
      <div className='title border-[1px] border-white rounded-xl backdrop-blur-md'>
        <h1 className='my-4 text-center '>Les recettes populaires</h1>
      </div>
      <div className="flex gap-4">
      {
        recipes && recipes.map(recipe => {
 
          if(Number(recipe.like) > 10){
            const recipesPop = [];
            recipesPop.push(recipe)
            return (
              <RecipeList recipes={recipesPop}/>
            )
          }
        })
      }
      </div>
    </div>
  )
}