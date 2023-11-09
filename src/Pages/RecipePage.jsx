import "./recipePage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GoBack from "../assets/arrow_back.svg";
import { Navigation } from "./Components/Navigation";

export const RecipePage = () => {

  // Created by Nina - this page shows the whole overview of one recipe

  // getting the id of a recipe with params
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

    // putting the ingredients and steps into arrays
    async function getIngredient() {
      const response = await fetch(ingredientsUrl);
      const data = await response.json();
      const ingredientsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
        checked: false,
      }));
      setIngredients(ingredientsArray);
    }
    getIngredient();

    async function getStep() {
      const response = await fetch(stepsUrl);
      const data = await response.json();
      const stepsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
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
      <div className="page">
        <Navigation />
        <div className="position">
          <img
            className="picture"
            src={recipe.picture}
            alt="Recipe image"
            id="food-pic"
          />
          <Link to="/">
          <img src={GoBack} alt="Go to the previous page" className="back-btn-recipe"/>
        </Link>

        {/* done by Petya */}
        <h4 className="text-position2">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1743&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" className="ProfilePic"></img>  
            {recipe.username}</h4>
          <h1 className="text-position">{recipe.name}</h1>
        </div>
        <div className="recipe_margin">
        <p className="recipe-description">{recipe.description}</p>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient) => (
            // checkboxes by Petya
            <div className="ingredient" key={ingredient.id}>
              <label className="custom-checkbox-label">
                <input
                  type="checkbox"
                  checked={ingredient.checked}
                  onChange={() => handleIngredientClick(ingredient.id)}
                  className="custom-checkbox-input"
                />
                <span className="custom-checkbox"></span>
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
      </div>
    </div>
  );
};
