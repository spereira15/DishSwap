document.addEventListener("DOMContentLoaded", function () {
    // Select the search input and search button
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    // Add an event listener to the search button
    searchButton.addEventListener("click", function () {
      // Get the user's search query from the input field
      const searchQuery = searchInput.value;

      // Redirect the user to the homepage with the search query as a URL parameter
      window.location.href = `/homepage?search=${encodeURIComponent(searchQuery)}`;
      // Replace "/homepage" with the actual URL of your homepage
      // encodeURIComponent() is used to properly encode the search query for the URL
    });
  });