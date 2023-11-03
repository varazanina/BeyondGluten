import "./recipeCard.css"
import { useNavigate } from "react-router-dom"

export const RecipeCard = ({recipe}) => {
    const navigate = useNavigate();

  return (
    <div className="article" onClick={() => navigate (`/recipes/${recipe.id}`)}>
        <h4>{recipe.username}</h4>
        <img className="picture" src={recipe.picture} alt="image" />
        <h1>{recipe.name}</h1>
        <h3>{recipe.description}</h3>
    </div>
  )
}
