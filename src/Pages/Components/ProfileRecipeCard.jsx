import "./recipeCard.css"
import { useNavigate } from "react-router-dom"

//Created by Vivian, using the Recipe Picture+Name Values from Firebase to display here
export default function ProfileRecipeCard ({recipe}) {

  const navigate = useNavigate();
  return (
    <div>
      <div className="recipecardProfile" onClick={() => navigate(`/recipes/${recipe.id}`)}>
        <img className="pictureGrid" src={recipe?.picture} alt="image" ></img>
        <p className="dishName">{recipe?.name}</p>
      </div>

    </div>
  )
}
