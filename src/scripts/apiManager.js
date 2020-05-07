const getAllRestaurantsFromAPI = () => {
  return fetch(`http://localhost:8088/restaurants`)
    .then((r) => r.json())
}

export default getAllRestaurantsFromAPI;