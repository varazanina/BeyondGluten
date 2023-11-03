import ProfileCard from "./ProfileCard";
import { useState, useEffect } from "react";

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
      
      <ul>
            {recipes.map(recipe => (
                <ProfileCard recipe={recipe} recipes={recipes} setRecipes={setRecipes} key={recipe.id} />
            ))}
        </ul>
    </div>
  )
}



/*

export default function ProfilePostedRecipes () {
  return (
    <div className="Profilegrid">
      <ProfileCard/>
    </div>
  )
  }
*/