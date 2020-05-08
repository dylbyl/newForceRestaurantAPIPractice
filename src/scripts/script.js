import getAllRestaurantsFromAPI from "./apiManager.js"
import checkSearch from "./eventListeners.js"
import printerFunctions from "./domPrinter.js"

//Loads all restaurants on page load
getAllRestaurantsFromAPI()
.then((responseArray) => {
  responseArray.forEach((restaurantObjectInLoop) => {
    document.querySelector("#restaurant-container").innerHTML += printerFunctions.printRestaurant(restaurantObjectInLoop);
  })
})

//adds and event listener to the search button
document.querySelector("#search-btn").addEventListener("click", function () {
  let searchField = document.querySelector("#restaurant-search").value;
  printerFunctions.clearResults();
  

  //API fetch, returns an array of restaurants to the second .then
  //Searches with a q filter using the user input
  getAllRestaurantsFromAPI()
    .then((responseArray) => {
      if (responseArray[0] == undefined) {
        document.querySelector(
          "#restaurant-container"
        ).innerHTML += `<article class="article">No results found</article>`;
      }
      responseArray.forEach((restaurantObjectInLoop) => {
        if (checkSearch(restaurantObjectInLoop, searchField)) {
          //Adds each search result to the page, including their name, address, user rating, price for two, and URLs to their Zomato page and menu
          document.querySelector("#restaurant-container").innerHTML += printerFunctions.printRestaurant(restaurantObjectInLoop);
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


  //  Add event listener on submit button for restaurant form
  document.querySelector("#add-btn").addEventListener("click", function(){

    // When the button is clicked, log all the values that user typed in to the console
    const restaurantName = document.querySelector("#name-input").value
    const restaurantMenuURL = document.querySelector("#menu-url-input").value
    const restaurantURL = document.querySelector("#url-input").value
    const restaurantRating = document.querySelector("#rating-input").value
    const restaurantCostPerTwo = document.querySelector("#cost-input").value
    const restaurantAddress = document.querySelector("#address-input").value

    console.log(restaurantName, restaurantMenuURL, restaurantURL, restaurantRating, restaurantCostPerTwo, restaurantAddress)

    const restaurantObject = {
      url : restaurantURL,
      menuURL : restaurantMenuURL,
      name : restaurantName,
      averageUserRating : restaurantRating,
      averageCostPerTwo : restaurantCostPerTwo,
      address : restaurantAddress
    }

    fetch("http://localhost:8088/restaurants", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(restaurantObject)
})
.then(()=> {
  
  document.querySelector("#restaurant-container").innerHTML = "";
  getAllRestaurantsFromAPI()
.then((responseArray) => {
  responseArray.forEach((restaurantObjectInLoop) => {
    document.querySelector("#restaurant-container").innerHTML += printerFunctions.printRestaurant(restaurantObjectInLoop);
  })
})
})

  })