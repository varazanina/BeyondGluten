import { useState } from "react";
import "./recipeCard.css";
import { useNavigate } from "react-router-dom";
import UserPic from "./UserPic";

export const RecipeCard = ({ recipe }) => {

  // Made by Nina

  const navigate = useNavigate();

  /*Drop down menu by Marta & ChatGPT*/
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const url = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${recipe.id}.json`;
  async function deleteRecipe () {
      const response = await fetch(url,{
          method: "DELETE"
      }
      )
      if (response.ok) {
          navigate("/")
          location.reload();
      }
      else {
          console.log("Something went wrong.")
      }
  }
  return (
    <div className="recipeCard">
      <div className="top-bar">
      <UserPic/>
        <p>{recipe.username}</p>
        {/*Drop down menu by Marta & ChatGPT*/}
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
          <div
            id="myDropdown"
            className={`dropdown-content ${dropdownOpen ? "show" : ""}`}
          >
            <a onClick={() => navigate(`/update/${recipe.id}`)}>
              <span className="material-symbols-outlined">edit</span>
              Edit
            </a>
            <a onClick={deleteRecipe} >
              <span className="material-symbols-outlined">delete</span> Delete
            </a>
          </div>
        </div>
      </div>

      {/* Getting data based on recipe prop */}
      <img
        className="picture"
        src={recipe.picture}
        alt="image"
        onClick={() => navigate(`/recipes/${recipe.id}`)}
      />
      <div className="post-content">
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};
