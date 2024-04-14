const search = () => {
  const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
  const storeitems = document.getElementById('article-list')
  const article = document.querySelectorAll('.article')
  const pname = document.getElementsByTagName('h2')

  
}


// const BACK_END_URL = 'http://localhost:3001'


// const searchList = document.querySelector('ul')
// const searchInput = document.getElementById('searchInput')
// const searchForm = document.getElementById('searchForm');

// const keyword = searchInput.value.trim();
// //const searchResultsUrl = 'http://127.0.0.1:5500/Client/input.html/searh?keyword='+keyword;

// const searchResult = async()=>{
  
//   try {
//     // const response = await fetch (`${BACK_END_URL}/search?keyword=${encodeURIComponent(keyword)}`)
//     const response = await fetch (BACK_END_URL + '/');
//     const searchResults = await response.json();
    
//     searchList.innerHTML = '';

//     searchResults. forEach(searchResult => {
//       const searchItem = document.createElement('li');
//       const author = document.createElement('div');
//       author.textContent = searchResult.username;
//       const title = document.createElement('div');
//       title.textContent = searchResult.title;
//       const description = document.createElement('div')
//       description.textContent = searchResult.description;
//       const rate = document.createElement('div')
//       rate.textContent = searchResult.rate;
      
//       searchItem.appendChild(title);
//       searchItem.appendChild(author);
//       searchItem.appendChild(description);
//       searchItem.appendChild(rate);
      
//       searchList.appendChild(searchItem);
//     })

//   } catch (error) {
//     alert("Error retrieving tasks" + error.message)
//   }
// }


// searchForm.addEventListener('submit',async (event) => {
  
//   event.preventDefault()
//   //const searchword = searchInput.value.trim();
//   searchResult();
//   // searchInput.value = '';
//   // searchInput.focus();
    
//   // const searchResultsUrl = `http://127.0.0.1:5500/Client/input.html/search?keyword=${searchword}`;
//   // window.location.href = searchResultsUrl;
  
//   //searchResult(keyword);
//     //searchInput.value = '';
//     //searchInput.focus();
//     // addCommentToPage(commentInput.value);
//   // } catch (error) {
//   //   console.error(error);
//     //window.location.href = 'searchResult.html';
  
// })

// // window.onload = async () => {
// //   const urlParams = new URLSearchParams(window.location.search);
// //   const keyword = urlParams.get('keyword');
// //   if (keyword) {
// //       searchInput.value = keyword;
// //       await searchResult();
// //   }
// // };