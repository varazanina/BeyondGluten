import "./recipeCard.css"


export default function ProfileCard ({recipe}) {
  return (
    <div className="article">
        <img className="picture" src={recipe?.picture} alt="image"></img>
        <h1>{recipe?.name}</h1>

    </div>
  )
}
