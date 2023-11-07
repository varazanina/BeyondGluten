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
        const data = await response.json();
        console.log(data);
        setRecipe(data);
        setName(recipe.name);
        setDescription(recipe.description);
        setIngredients(recipe.ingredients);
        setSteps(recipe.steps);
        setPicture(recipe.picture);
    }
    getRecipe();
    }, [recipe.name, recipe.description, recipe.picture, recipe.ingredients, recipe.steps, url]);

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
      <h1 className="bigheading">Create a recipe</h1>
      {/* The create form */}
      <form onSubmit={updateRecipe}>
        <label className="heading">Name of your dish*</label>
        <input className="textbox"
          type="text"
          placeholder="Type name of the dish here"
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
          </div>
        ))}
        <button type="button" className="secondbutton" onClick={addIngredient}>
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
          </div>
        ))}
        <button type="button" className="secondbutton" onClick={addStep}>
          Add +
        </button>
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