function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      // Assuming the API call is successful
      resolve("API call successful");
    }, 1000); // Simulating a delay of 1 second
  });
}

export default getResponseFromAPI;
