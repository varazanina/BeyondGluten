import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Create.css';

import Remove from "../assets/remove.svg";

//created by Marta
export const CreatePage = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [substitutes, setSubstitutes] = useState([]);
  const [steps, setSteps] = useState([]);
  const navigate = useNavigate();

  //cancel btn by ChatGPT
  const handleCancel = () => {
    navigate(-1); // This navigates back one step in the browser history
  };

  // picture appload by Nina
  function handlePictureChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
        // image file size must be below 0,5MB
        const reader = new FileReader();
        reader.onload = event => {
            setPicture(event.target.result);
        };
        reader.readAsDataURL(file);
        setErrorMessage(""); // reset errorMessage state
    } else {
        // if not below 0.5MB display an error message using the errorMessage state
        setErrorMessage("The image file is too big!");
        console.log(errorMessage);
    }
  }

  //add Ingredients by ChatGPT
  const addIngredient = () => {
    const newIngredient = {
      name: "",
      quantity: "",
    };
    setIngredients([...ingredients, newIngredient]);
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  //add Substitutes by Nina
  const addSubstitute = () => {
    const newSubstitute = {
      ing: "",
      name: "",
      quantity: "",
    };
    setSubstitutes([...substitutes, newSubstitute]);
  };

  const handleSubstituteChange = (index, field, value) => {
    const updatedSubstitutes = [...substitutes];
    updatedSubstitutes[index][field] = value;
    setSubstitutes(updatedSubstitutes);
  };

  //add steps by Marta
  const addStep = () => {
    const newStep = {
      name: "",
    };
    setSteps([...steps, newStep]);
  };

  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };

  // Remove steps and ingredients by Nina

  function removeIngredient(index) {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  }

  function removeSubstitute(index) {
    const updatedSubstitutes = [...substitutes];
    updatedSubstitutes.splice(index, 1);
    setSubstitutes(updatedSubstitutes);
  }

  function removeStep(index) {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");

    //Construction of the post in the database
    const newPost = {
      name: name,
      picture: picture,
      description: description,
      ingredients: ingredients,
      substitutes: substitutes,
      steps: steps,
      username: "glutenhater",
    };
    console.log(newPost);

    //link to firebase
    const url =
      "https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes.json";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPost),
    });

    //Got to homepage after posting
    if (response.ok) {
      navigate("/");
    } else {
      console.log("Something went wrong");
    }
  }

  return (
    <section className="page general_margin">
      <h1 className="bigheading">Create a recipe</h1>
      {/* The create form */}
      <form onSubmit={handleSubmit}>
        <label className="heading">Name of your dish*</label>
        <input className="textbox"
          type="text"
          placeholder="Type name of the dish here"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="heading">Image</label>
        <input className="file-input"
          type="file"
          accept="image/*"
          onChange={handlePictureChange}
        />
        <img className="picture_preview" src={picture} alt="Choose" />
        <label className="heading">Description*</label>
        <input className="textbox"
          type="text"
          placeholder="Tell us more about the dish"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {/*add new Ingredients by ChatGPT*/}
        <label className="heading">Ingredients</label>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input className="ingredients"
              type="text"
              placeholder="Ingredient name"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
            />
            <input className="quantity"
              type="text"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
            />
            <button type="button" onClick={() => removeIngredient(index)}>
              <img src={ Remove } alt="remove ingredient" />
            </button>
          </div>
        ))}
        <button type="button" className="secondbutton" onClick={addIngredient}>
          Add +
        </button>

        {/* Substitutes by Nina */}
        <label className="heading">Substitudes</label>
        {substitutes.map((substitute, index) => (
          <div key={index}>
            <input className="ing"
              type="text"
              placeholder="Ingredient"
              value={substitute.ing}
              onChange={(e) =>
                handleSubstituteChange(index, "ing", e.target.value)
              }
            />
            <input className="substitutes"
              type="text"
              placeholder="Substitute name"
              value={substitute.name}
              onChange={(e) =>
                handleSubstituteChange(index, "name", e.target.value)
              }
            />
            <input className="quantity"
              type="text"
              placeholder="Quantity"
              value={substitute.quantity}
              onChange={(e) =>
                handleSubstituteChange(index, "quantity", e.target.value)
              }
            />
            <button type="button" onClick={() => removeSubstitute(index)}>
              <img src={ Remove } alt="remove ingredient" />
            </button>
          </div>
        ))}
        <button type="button" className="secondbutton" onClick={addSubstitute}>
          Add +
        </button>
        {/*add new steps by Marta*/}
        <label className="heading">Steps</label>
        {steps.map((step, index) => (
          <div key={index}>
            <input className="steps"
              type="text"
              placeholder="Step"
              value={step.name}
              onChange={(e) => handleStepChange(index, "name", e.target.value)}
            />
            <button type="button" onClick={() => removeStep(index)}>
              <img src={ Remove } alt="remove step" />
            </button>
          </div>
        ))}
        <button type="button" className="secondbutton" onClick={addStep}>
          Add +
        </button>
        <button type="submit" className="primarybutton">
          Create
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
