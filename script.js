//adds and event listener to the search button
document.querySelector("#search-btn").addEventListener("click", function () {
  let searchField = document.querySelector("#restaurant-search").value;
  document.querySelector("#restaurant-container").innerHTML = ``;

  //API fetch, returns an array of restaurants to the second .then
  //Searches with a q filter using the user input
  fetch(`http://localhost:8088/restaurants`)
    .then((r) => r.json())
    .then((responseArray) => {
      if (responseArray[0] == undefined) {
        document.querySelector(
          "#restaurant-container"
        ).innerHTML += `<article class="article">No results found</article>`;
      }
      responseArray.forEach((restaurant) => {
        if (restaurant.restaurant.name.toLowerCase().includes(`${searchField.toLowerCase()}`)) {
          //Adds each search result to the page, including their name, address, user rating, price for two, and URLs to their Zomato page and menu
          document.querySelector("#restaurant-container").innerHTML += `
        <article class="article">
        <a href="${restaurant.restaurant.url}"><b>${
            restaurant.restaurant.name
          }</b><br></a>
        ${restaurant.restaurant.location.address}<br>
        Aggregate score: ${
          restaurant[`restaurant`][`user_rating`][`aggregate_rating`]
        }<br>
        Average cost for two: $${
          restaurant[`restaurant`][`average_cost_for_two`]
        } <br>
        <a href="${restaurant.restaurant.menu_url}"><b>View Menu</b></a>
        </article>`;
        }
      });
    });
});

//Adds an event listener to the search bar for key presses, and checks for a press of the enter key
document
  .querySelector("#restaurant-search")
  .addEventListener("keyup", function () {
    //if the Enter key is pressed, this triggers the click event for the search button
    if (event.keyCode == 13) {
      document.getElementById("search-btn").click();
    }
  });
