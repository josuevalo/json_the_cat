const request = require('request');
const args = process.argv.slice(2);

const fetcher = function(breed) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
    if (error) {
      console.log('Cat–astrophe! Something went wrong =( \n', error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Error: It's paw-sible the breed is not right!");
      } else {
        console.log("Here's your cat! \n", data[0].description);
      }
    }
  });


};

fetcher(args[0]);