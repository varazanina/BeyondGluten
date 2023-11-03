import "./recipePage.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import GoBack from "../assets/arrow_back.svg"

export const RecipePage = () => {
    const params = useParams();
    const url = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId}.json`;
    const ingr = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId}/ingredients.json`;

    const [recipe, setRecipe] = useState({});

    useEffect (() => {
        async function getRecipe() {
            const response = await fetch(url);
            const data = await response.json();
            setRecipe(data);
        }
        getRecipe();
    },[url]);

    const [ingredients, setIngredients] = useState([]);
    useEffect (() => {
        async function getIngredient() {
            const response = await fetch(ingr);
            const data = await response.json();
            const ingredientsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            setIngredients(ingredientsArray);
        }
        getIngredient();
    },[ingr]);

  return (
    <div>
        <Link to="/">
            <img src={GoBack} alt="Go to the previous page" />
        </Link>
        <img className="picture" src={recipe.picture} alt="Recipe image" />
        <h4>{recipe.username}</h4>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
        <ul>
            {ingredients.map(ingredient => (
                <div className="ingredient" key={ingredient.id}>
                    <p>{ingredient.name}</p>
                    <p>{ingredient.quantity}</p>
                </div>
            ))}
        </ul>
    </div>
  )
}
