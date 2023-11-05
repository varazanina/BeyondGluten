import "./recipeCard.css"

//Created by Vivian, using the Recipe Picture+Name Values from Firebase to display here
export default function ProfileCard ({recipe}) {
  return (
    <div >
      <div className="recipecardProfile">
        <img className="pictureGrid" src={recipe?.picture} alt="image"></img>
        <p className="dishName">{recipe?.name}</p>
      </div>

    </div>
  )
}
