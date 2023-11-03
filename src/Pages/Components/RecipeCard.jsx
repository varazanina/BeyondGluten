import "./recipeCard.css"

export const RecipeCard = ({recipe}) => {
  return (
    <div className="article">
        <h4>{recipe.username}</h4>
        <img className="picture" src={recipe.picture} alt="image" />
        <h1>{recipe.name}</h1>
        <h3>{recipe.description}</h3>
    </div>
  )
}
