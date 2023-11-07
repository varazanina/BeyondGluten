import { useState } from "react";
import "./recipeCard.css";
import { useNavigate } from "react-router-dom";
import UserPic from "./UserPic";

export const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  /*Drop down menu by Marta & ChatGPT*/
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.matches(".dropbtn")) {
      setDropdownOpen(false);
    }
  };

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
            onClick={closeDropdown}
          >
            <a href="#">
              <span className="material-symbols-outlined">edit</span>
              Edit
            </a>
            <a href="#">
              <span className="material-symbols-outlined">delete</span> Delete
            </a>
          </div>
        </div>
      </div>
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
