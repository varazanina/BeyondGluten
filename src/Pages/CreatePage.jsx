import { useState } from "react";
import { useNavigate } from "react-router-dom";

//craeted by Marta
export const CreatePage = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const navigate = useNavigate();

  //cancel btn by ChatGPT
  const handleCancel = () => {
    navigate(-1); // This navigates back one step in the browser history
  };

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

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");

    //Construction of the post in the database
    const newPost = {
      name: name,
      picture: picture,
      description: description,
      ingredients: ingredients,
      steps: steps,
      username: "glutenHater",
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
    <section className="page">
      <h1>Create New Post</h1>
      {/* The create form */}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Type name of the dish here"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Picture:</label>
        <input
          type="url"
          placeholder="Paste picture url"
          value={picture}
          onChange={(event) => setPicture(event.target.value)}
        />
        <img src={picture} alt="" />
        <label>Description</label>
        <input
          type="text"
          placeholder="Tell us more about the dish"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {/*add new Ingredients by ChatGPT*/}
        <label>Ingredients</label>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Ingredient name"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
        {/*add new steps by Marta*/}
        <label>Steps</label>
        {steps.map((step, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Step"
              value={step.name}
              onChange={(e) => handleStepChange(index, "name", e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addStep}>
          Add Step
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
