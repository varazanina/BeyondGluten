import { Navigation } from "./Components/Navigation";
import { Themes } from "./Components/Themes";
import { RecipeCard } from "./Components/RecipeCard";
import { useState, useEffect } from "react";
import "./HomePage.css";
import UserPic from "./Components/UserPic";

export const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getRecipe() {
      const url =
        "https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes.json";
      const response = await fetch(url);
      const data = await response.json();
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
      <div className="FollowingHeader">
        <h2>Following</h2>
        <UserPic />
      </div>

      <ul>
        {recipes.map((recipe) => (
          <RecipeCard
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
