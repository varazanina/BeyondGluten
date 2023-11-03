import "./recipeCard.css";
import { useNavigate } from "react-router-dom";

export const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div
      className="recipeCard"
      onClick={() => navigate(`/recipes/${recipe.id}`)}
    >
      <div className="top-bar">
        <h4>{recipe.username}</h4>
      </div>
      <img className="picture" src={recipe.picture} alt="image" />
      <div className="post-content">
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};
