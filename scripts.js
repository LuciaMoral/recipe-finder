const baseEndpoint = "https://food-api-lgch.onrender.com/recipes";


async function fetchRecipes(query) {
  const res = await fetch(`${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data);
}

fetchRecipes('pasta');
