import { useEffect, useRef } from "react";
import RecipeCard from "../components/recipeCard";
import useFetchRecipes from "../utils/useFetchRecipes"
import { animateElement } from "../utils/animateElement";


export default function Favorite() {
  const { recipes } = useFetchRecipes("");

  const recipe = recipes[0]
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    animateElement(containerRef)
  }, [])


  return (
    <div className="h-screen ">
      <div 
        ref={containerRef}
      className='title border-[1px] border-white rounded-xl backdrop-blur-md opacity-0'>
        <h1 className='my-4 text-center '>Favori du jour</h1>
      </div>
      <div className="title flex flex-col rounded-lg p-4 border-[0.5px] backdrop-blur-sm">
        <p>On ne peut que vous proposez de belles options avec la recette favorite du jour.</p>
        <p>Cette recette fait toujours plaisir à la famille. 😊</p>
      </div>
      <div className="flex justify-center ">
        <ul className="flex container-recipe border-[0.5px] rounded-lg w-[250px]">
          {
            recipe !== undefined ? <RecipeCard recipe={recipe} /> : <div></div>
          }
        </ul>
      </div>
    </div>
  )
}