const BACK_END_URL = 'http://localhost:3001'
window.location.href = searchResultsUrl;

const searchList = document.querySelector('ul')
const searchInput = document.getElementById('searchInput')

//const keyword = searchInput.value.trim();
// const searchResultsUrl = 'http://127.0.0.1:5500/Client/input.html/searh?keyword='+keyword;

const searchResult = async()=>{
  
  try {
    const response = await fetch (BACK_END_URL + '/search?keyword='+ keyword);
    
    const searchResults = await response.json();
    searchResults. forEach(searchResult => {
      const searchItem = document.createElement('li');
      const author = document.createElement('div');
      author.textContent = searchResult.username;
      const title = document.createElement('div');
      title.textContent = searchResult.title;
      const description = document.createElement('div')
      description.textContent = searchResult.description;
      const rate = document.createElement('div')
      rate.textContent = searchResult.rate;
      
      searchItem.appendChild(title);
      searchItem.appendChild(author);
      searchItem.appendChild(description);
      searchItem.appendChild(rate);
      
      searchList.appendChild(searchItem);
    })

  } catch (error) {
    alert("Error retrieving tasks" + error.message)
  }
}


searchInput.addEventListener('keypress',async (event) =>{
  if (event.key === 'Enter') {
    event.preventDefault()
    //const keyword = searchInput.value.trim();
    // const searchResultsUrl = `http://127.0.0.1:5500/Client/input.html/search?keyword=${keyword}`;
    // window.location.href = searchResultsUrl;
    searchResult();
    //searchInput.value = '';
    //searchInput.focus();
    // addCommentToPage(commentInput.value);
  // } catch (error) {
  //   console.error(error);
  // 
  } 
})



// document.addEventListener('DOMContentLoaded', () => {
//   const categoryIcons = document.querySelectorAll('.category-icons img');
//   const searchResults = document.querySelector('.search-results');

//   categoryIcons.forEach(icon => {
//     icon.addEventListener('click', async () => {
//       const category = icon.getAttribute('data-category');
//       try {
//         const response = await fetch(`/recipes?category=${category}`);
//         const recipes = await response.json();
//         displayRecipes(recipes);
//       } catch (error) {
//         console.error('Error fetching recipes', error);
//       }
//     });
//   });

//   function displayRecipes(recipes) {
//     searchResults.innerHTML = '';
//     recipes.forEach(recipe => {
//       const li = document.createElement('li');
//       li.textContent = `${recipe.name} - ${recipe.category}`;
//       searchResults.appendChild(li);
//     });
//   }
// });