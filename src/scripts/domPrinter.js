const printerFucntions = {
    printRestaurant : (singleRestaurant) => {
        return `<article class="article">
              <a href="${singleRestaurant.restaurant.url}"><b>${
                  singleRestaurant.restaurant.name
                }</b><br></a>
              ${singleRestaurant.restaurant.location.address}<br>
              Aggregate score: ${
                singleRestaurant[`restaurant`][`user_rating`][`aggregate_rating`]
              }<br>
              Average cost for two: $${
                singleRestaurant[`restaurant`][`average_cost_for_two`]
              } <br>
              <a href="${singleRestaurant.restaurant.menu_url}"><b>View Menu</b></a>
              </article>`;
      },
      
      clearResults : () => {
        document.querySelector("#restaurant-container").innerHTML = ``;
        document.querySelector("#restaurant-search").value = ``;
      }

}

export default printerFucntions;
