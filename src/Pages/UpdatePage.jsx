import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Create.css';

// Created by Nina - on top of Create Page - PUT as part of the CRUD

export const UpdatePage = () => {

  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const url = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId}.json`;

  //cancel btn by ChatGPT
  const handleCancel = () => {
    navigate(-1); // This navigates back one step in the browser history
  };

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setName(data.name);
        setDescription(data.description);
        setIngredients(data.ingredients);
        setSteps(data.steps);
        setPicture(data.picture);
      } else {
        console.log("Failed to fetch recipe data");
      }
    }
    getRecipe();
  }, [url]);
  

  async function updateRecipe(event) {
        event.preventDefault();

        const recipeToUpdate = {
        name: name,
        picture: picture,
        description: description,
        ingredients: ingredients,
        steps: steps,
        username: "glutenhater",
        };
        console.log(recipeToUpdate);

        const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(recipeToUpdate),
        });

        //Reload the homepage after posting
        if (response.ok) {
        navigate("/");
        } else {
        console.log("Something went wrong");
        }
    }

  return (
    <section className="page general_margin">
      <h1 className="bigheading">Update a recipe</h1>
      {/* The update form */}
      <form onSubmit={updateRecipe}>
        <label className="heading">Name of your dish*</label>
        <input className="textbox"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="heading">Image</label>
        <input className="textbox"
          type="url"
          placeholder="Paste picture url"
          value={picture}
          onChange={(event) => setPicture(event.target.value)}
        />
        <img src={picture} alt="" />
        <label className="heading">Description*</label>
        <input className="textbox"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit" className="primarybutton">
          Update
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="secondarybutton"
        >
          Cancel
        </button>
      </form>
    </section>
  );
};