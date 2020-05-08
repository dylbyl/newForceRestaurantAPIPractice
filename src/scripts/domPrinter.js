const printerFucntions = {
    printRestaurant : (singleRestaurant) => {
        return `<article class="article">
              <a href="${singleRestaurant.url}"><b>${
                  singleRestaurant.name
                }</b><br></a>
              ${singleRestaurant.address}<br>
              Aggregate score: ${
                singleRestaurant[`averageUserRating`]
              }<br>
              Average cost for two: $${
                singleRestaurant[`averageCostPerTwo`]
              } <br>
              <a href="${singleRestaurant.menuURL}"><b>View Menu</b></a>
              </article>`;
      },
      
      clearResults : () => {
        document.querySelector("#restaurant-container").innerHTML = ``;
        document.querySelector("#restaurant-search").value = ``;
      }

}

export default printerFucntions;
