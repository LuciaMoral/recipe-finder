const baseEndpoint = "https://food-api-lgch.onrender.com/recipes";
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');


async function fetchRecipes(query) {
  const res = await fetch(`${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(form.query.value);
  const recipes = await fetchRecipes(el.query.value);
  displayRecipes(recipes);
}

function displayRecipes(recipes) {
  console.log('Creating HTML...');
  const html = recipes.map(recipe => {
    return `<div class="recipe">
      <h2>${recipe.name} </h2>
      <p>${recipe.description} </p>
       <img class="picture" src="${recipe.url}" alt="${recipe.name}" />
      <p>${recipe.method} </p>
      <a href="${recipe.web}">View recipe </a>
    </div>`
  });
recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);

fetchRecipes('pizza');
