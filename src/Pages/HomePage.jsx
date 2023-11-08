import { Navigation } from "./Components/Navigation";
import { RecipeCard } from "./Components/RecipeCard";
import { useState, useEffect } from "react";
import "./HomePage.css";
import UserPic from "./Components/UserPic";

export const HomePage = () => {

  // Created by Nina - GET as part of the CRUD

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getRecipe() {
      const url =
        "https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes.json";
      const response = await fetch(url);
      const data = await response.json();

      // putting recipes to an array
      const recipesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setRecipes(recipesArray);
    }
    getRecipe();
  }, []);

  return (
    <div className="page">
      <Navigation />
      {/*Post header created by Vivian*/}
          <div className="FollowingHeader">
            <h2>Following</h2>
            <UserPic />
          </div>
 
      <ul>
        {recipes.map((recipe) => (
          <RecipeCard

            // defining props
            recipe={recipe}
            recipes={recipes}
            setRecipes={setRecipes}
            key={recipe.id}
          />
        ))}
      </ul>
    </div>
  );
};
