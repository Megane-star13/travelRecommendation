// Fetch data from travel_recommendation_api.json
fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the data to check it
  })
  .catch(error => console.log('Error fetching data:', error));

// Handle the Search button click event
document.getElementById('search-btn').addEventListener('click', function () {
  let searchKeyword = document.getElementById('search-bar').value.toLowerCase();
  console.log(searchKeyword); // Check the entered search keyword

  // Filter recommendations based on keyword (Example: 'beach', 'temple', 'country')
  if (searchKeyword.includes('beach')) {
    console.log("Search for beaches");
    // Call function to display beach recommendations
  } else if (searchKeyword.includes('temple')) {
    console.log("Search for temples");
    // Call function to display temple recommendations
  } else if (searchKeyword.includes('country')) {
    console.log("Search for countries");
    // Call function to display country recommendations
  }
});

// Clear search results
document.getElementById('reset-btn').addEventListener('click', function () {
  document.getElementById('search-bar').value = ''; // Clear search input
  document.getElementById('results-container').innerHTML = ''; // Clear results container
});

// Function to display recommendations
function displayRecommendations(data, keyword) {
  let results = data.filter(item => item.category.toLowerCase() === keyword);
  let resultsContainer = document.getElementById('results-container');
  
  results.forEach(place => {
    let div = document.createElement('div');
    div.classList.add('recommendation');
    div.innerHTML = `
      <img src="${place.imageUrl}" alt="${place.name}">
      <h3>${place.name}</h3>
      <p>${place.description}</p>
    `;
    resultsContainer.appendChild(div);
  });
}
