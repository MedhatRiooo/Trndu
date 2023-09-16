document.addEventListener('DOMContentLoaded', function () {
  let searchInput = document.getElementById('country-search');
  let countryLists = document.querySelectorAll('.country-list');
  let searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    let results = new Set();

    countryLists.forEach(function (countryList) {
      const countryItems = countryList.getElementsByClassName('country-list-item');

      for (let i = 0; i < countryItems.length; i++) {
        const countryName = countryItems[i].textContent.toLowerCase();

        if (countryName.includes(searchTerm)) {
          results.add(countryItems[i].cloneNode(true));
        }
      }
    });

    // Clear previous results
    while (searchResults.firstChild) {
      searchResults.removeChild(searchResults.firstChild);
    }

    // Display search results
    if (results.size > 0) {
      results.forEach(function (result) {
        searchResults.appendChild(result);
      });
    } else {
      const noResults = document.createElement('li');
      noResults.textContent = 'No results found';
      searchResults.appendChild(noResults);
    }
  });
});
function checkInput() {
  let searchInput = document.getElementById('country-search');
  let resultsDiv = document.getElementById('search-results');

  if (searchInput.value ==='') {
      resultsDiv.style.display = 'none'; // Hide the results div
  } else {
      resultsDiv.style.display = 'block'; // Show the results div
  }
}


