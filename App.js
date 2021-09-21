import {useEffect, useState} from 'react'
import './App.css';
import Recipe from './Recipe';

function App() {

  const APPID = "9f01ee0a";
  const AppKey = "4f28d6fde5b801afbbe499f7c4f15e09";
  const [recipes, setRecipes] = useState([])
  const [searchItem, setSearchItem] = useState("");
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
   GetRecipes();
  }, [query])



  // fetch recipes

  const GetRecipes = async ()=>{
    const response  = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APPID}&app_key=${AppKey}&imageSize=SMALL`)
    const data = await response.json();
    setRecipes(data.hits);
  }


  const UpdateSearchItem= e =>{
    setSearchItem(e.target.value)
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(searchItem)
    setSearchItem("");
  }

  return (
  <div className="App">
    <div className="AppHeader">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" value={searchItem}  onChange={UpdateSearchItem} type="text"/>
        <button className="search-btn" type="submit">Search</button>
      </form>
    </div>

    <div className="Results">
      {recipes.map((recipe)=>(
        <Recipe
        key={Math.random()}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        cuisine={recipe.recipe.cuisineType}
        recipeurl={recipe.recipe.url}
        />
        ))
      }
    </div>

  </div>
  );
}

export default App;
