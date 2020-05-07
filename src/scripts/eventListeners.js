const checkSearch = (singleRestaurant, searchField) => {
    return singleRestaurant.restaurant.name.toLowerCase().includes(`${searchField.toLowerCase()}`);
  }
  
  export default checkSearch;