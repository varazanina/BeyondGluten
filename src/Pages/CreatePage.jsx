import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");

    const newPost = {
      name: name,
      image: image,
      description: description,
      ingredients: ingredients,
      username: "glutenHater",
    };
    console.log(newPost);

    const url =
      "https://beyond-gluten-default-rtdb.europe-west1.firebasedatabase.app/recipes.json";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPost),
    });

    /*console.log(response);
    navigate("/");*/

    if (response.ok) {
      navigate("/");
    } else {
      console.log("Sth went wrong");
    }
  }

  return (
    <section className="page">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Type name of the dish here"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label>Image:</label>
        <input
          type="url"
          placeholder="Paste image url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        ></input>
        <img src=""></img>
        <label>Description</label>
        <input
          type="text"
          placeholder="Tell us more about the dish"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <label>Ingredients</label>
        <input
          type="text"
          placeholder="Type name of the dish here"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        ></input>
        <button>Create</button>
      </form>
    </section>
  );
};
