import "./recipePage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GoBack from "../assets/arrow_back.svg";
import { Navigation } from "./Components/Navigation"; 
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const RecipePage = () => {

  const navigate = useNavigate();
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
  const handleIngredientClick = (ingredientId) => 
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient.id === ingredientId
          ? { ...ingredient, checked: !ingredient.checked }
          : ingredient
      )
    );
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const deleteUrl = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${recipe.id}.json`;
  async function deleteRecipe () {
      const response = await fetch(deleteUrl,{
          method: "DELETE"
      }
      )
      if (response.ok) {
          navigate("/")
          location.reload();
      }
      else {
          console.log("Something went wrong.")
      }
    }

    const deleteUrl2 = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${recipe.id}.json`;
    async function deleteRecipe () {
        const response = await fetch(deleteUrl2,{
            method: "DELETE"
        }
        )
        if (response.ok) {
            navigate("/")
            location.reload();
        }
        else {
            console.log("Something went wrong.")
        }
    }

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
          <div className="RecipeHeader">
            <div>
                <Link to="/">
                  <img src={GoBack} alt="Go to the previous page" className="back-btn-recipe"/>
                </Link>
            </div>
            <div></div>
                <div className="dropdown">
                  <button onClick={toggleDropdown} className="dropbtn">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                    <div
                        id="myDropdown"
                        className={`dropdown-content ${dropdownOpen ? "show" : ""}`}
                      >
                        <a onClick={() => navigate(`/update/${recipe.id}`)}>
                          <span className="material-symbols-outlined">edit</span>
                          Edit
                        </a>
                        <a onClick={deleteRecipe} >
                          <span className="material-symbols-outlined">delete</span> Delete
                        </a>
                    </div>
                </div>
            
          </div>
          
          <h4 className="text-position2">{recipe.username}</h4>
          <h1 className="text-position">{recipe.name}</h1>
        </div>
        <div className="recipe_margin">
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
      </div>
    </div>
  );
;
}; 