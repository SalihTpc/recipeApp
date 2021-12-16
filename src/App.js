import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const API_ID = "2d7c478f";
  const API_KEY = "29520e138cfe4484d82f67eb08332892";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    ).then((response) => response.json());
    const data = response.hits;
    // data.map((dat) => {
    //   console.log(dat.recipe.label);
    // });
    setRecipes(data);
    // console.log({ recipes });
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="cards">
        {recipes.map((recipe) => (
          <div className="card" key={recipe.recipe.image}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt="" />
            <p>Calories: {recipe.recipe.calories}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
