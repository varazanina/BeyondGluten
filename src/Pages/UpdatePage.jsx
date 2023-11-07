import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Create.css';

//created by Nina - on top of Create Page
export const UpdatePage = () => {

  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const url = `https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes/${params.recipeId}.json`;
  console.log(url)

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

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setName(data.name);
        setDescription(data.description);
        setIngredients(data.ingredients);
        setSteps(data.steps);
        setPicture(data.picture);
        setRecipe(data);
      } else {
        console.log("Failed to fetch recipe data");
      }
    }
    getRecipe();
  }, [url]);
  

  async function updateRecipe(event) {
        event.preventDefault();

        //Construction of the post in the database
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

        //Got to homepage after posting
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
        {/*add new Ingredients by ChatGPT
        <label className="heading">Ingredients</label>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input className="ingredients"
              type="text"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
            />
            <input className="quantity"
              type="text"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" className="secondbutton" onClick={addIngredient}>
          Add +
        </button>
        {/*add new steps by Marta
        <label className="heading">Steps</label>
        {steps.map((step, index) => (
          <div key={index}>
            <input className="steps"
              type="text"
              value={step.name}
              onChange={(e) => handleStepChange(index, "name", e.target.value)}
            />
          </div>
        ))}
        <button type="button" className="secondbutton" onClick={addStep}>
          Add +
        </button> */}
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