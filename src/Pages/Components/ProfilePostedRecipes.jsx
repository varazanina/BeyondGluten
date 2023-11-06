import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";

//created by Nina, fetching Recipe Object and its key values from Firebase and displaying them in a list
export default function ProfilePostedRecipes  ()  {
  const [recipes, setRecipes] = useState([]);
    useEffect (() => {
        async function getRecipe() {
            const url = "https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes.json";
            const response = await fetch(url);
            const data = await response.json();
            const recipesArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            setRecipes(recipesArray);
        }
        getRecipe();
    }, []);

  return (
    <div>
      
      <div className="RecipeGrid">
            {recipes.map(recipe => (
                <ProfileCard recipe={recipe} recipes={recipes} setRecipes={setRecipes} key={recipe.id} />
            ))}
        </div>
    </div>
  )
}


