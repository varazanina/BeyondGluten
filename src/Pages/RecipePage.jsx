import "./recipePage.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const RecipePage = () => {
    const params = useParams();
    const url = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId}.json`;

    const [recipe, setRecipe] = useState({});

    useEffect (() => {
        async function getRecipe() {
            const response = await fetch(url);
            const data = await response.json();
            setRecipe(data);
        }
        getRecipe();
    },);

  return (
    <div>
        <h1>{recipe.name}</h1>
    </div>
  )
}
