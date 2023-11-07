import "./recipePage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GoBack from "../assets/arrow_back.svg";

export const RecipePage = () => {
  const params = useParams();
  const url = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId}.json`;
  const ingredientsUrl = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId}/ingredients.json`;
  const stepsUrl = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId}/steps.json`;

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(url);
      const data = await response.json();
      setRecipe(data);
    }
    getRecipe();
  }, [url]);

  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    async function getIngredient() {
      const response = await fetch(ingredientsUrl);
      const data = await response.json();
      const ingredientsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
        checked: false, // Add a 'checked' property to each ingredient
      }));
      setIngredients(ingredientsArray);
    }
    getIngredient();

    async function getStep() {
      const response = await fetch(stepsUrl);
      const data = await response.json();
      const stepsArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
      setSteps(stepsArray);
    }
    getStep();
  }, [ingredientsUrl, stepsUrl]);

  // Function to toggle the checked status of an ingredient
  const handleIngredientClick = (ingredientId) => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient.id === ingredientId
          ? { ...ingredient, checked: !ingredient.checked }
          : ingredient
      )
    );
  };

  return (

    <div>
        <Link to="/">
            <img src={GoBack} alt="Go to the previous page" className="back-btn" />
        </Link>
        <img className="picture" src={recipe.picture} alt="Recipe image" />
        <h4>{recipe.username}</h4>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
        <h2>Ingredients</h2>
        <ul>
            {ingredients.map(ingredient => (
                <div className="ingredient" key={ingredient.id}>
                    <p>{ingredient.name}</p>
                    <p>{ingredient.quantity}</p>
                </div>
            ))}
        </ul>
        <h2>Steps</h2>
        <ul>
            {steps.map(step => (
                <div key={step.id}>
                    <p>{step.name}</p>
                </div>
            ))}
        </ul>

    <div className="page">
      <Link to="/">
        <img src={GoBack} alt="Go to the previous page" />
      </Link>
      <div className="position">
      <img className="picture" src={recipe.picture} alt="Recipe image" />
      <h4 className="text-position2">{recipe.username}</h4>
      <h1 className="text-position">{recipe.name}</h1>
      </div>
      <p className="recipe-description">{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
         // checkboxes by Petya
            <div className="ingredient" key={ingredient.id}>
            <label>
              <input
                type="checkbox"
                checked={ingredient.checked}
                onChange={() => handleIngredientClick(ingredient.id)}
              />
              {ingredient.name} - {ingredient.quantity}
            </label>
          </div>
        ))}
      </ul>
      <h2 className="steps-spacing">Steps</h2>
      <ul>
        {steps.map((step) => (
          <div key={step.id}>
            <p>{step.name}</p>
          </div>
        ))}
        
      </ul>

    </div>
  );
};
