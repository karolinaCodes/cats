// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function (breed, callback) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      callback(data);
    } else {
      callback(undefined);
    }
  });
};

const printResults = data => {
  console.log(data);
};

// breedDetailsFromFile("Bombay", printResults);

module.exports = breedDetailsFromFile;
