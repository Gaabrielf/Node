// Przykładowe wywołanie z nazwą użytkownika: "node app.js octocat"
// Przykładowe wywołanie z nazwą użytkownika, jeśli chcemy znać liczbę followersów: "node app.js octocat followers"

const axios = require("axios");

const getUser = require("./user");
const getWeather = require("./weather");
const getRepositories = require("./repositories");

const userName = process.argv[2];
const followers = process.argv[3];

(async () => {
  try {
    const user = await getUser(userName);
    console.log(`Name of github account owner:  ${user.name}`);
    console.log(`Public repositories:  ${user.public_repos}`);
    if (process.argv[3] === "followers") {
      console.log(`Followers: ${user.followers}`);
    } else {
      console.log("Followers number hidden");
    }
  } catch (error) {
    console.log("User not found");
  }
})();

(async () => {
  try {
    const repos = await getRepositories(userName);
    for (i = 0; i < repos.length; i++) {
      console.log(`Repository's number ${i} name: ${repos[i].name}$`);
    }
  } catch (error) {
    console.log("Repositories names not found");
  }
})();

(async () => {
  try {
    const user = await getUser(userName);
    const { location } = user;
    const weather = await getWeather(location);

    console.log(weather.weather[0].main);
    console.log(weather.weather[0].description);
  } catch (error) {
    console.log("Weather not found");
  }
})();
