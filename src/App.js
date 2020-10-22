import React, { useEffect, useState } from 'react';
import Recipe from  './Recipe';
import './App.css';
const App = () =>{

  const APP_ID = "ca1e9934";
  const APP_KEY = "1215d957d3107879c6e1017233ff4b55";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const resposta = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await resposta.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

return(
  <div className="App">
    <h3 className="h3">Search for a recipe below</h3>
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button" type="submit">Search</button>
    </form>
    
    <div className="receitas">
    {recipes.map(recipe =>(
      <Recipe
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      servings={recipe.recipe.yield}/>
    ))}
    </div>
  </div>
);
};
export default App;
