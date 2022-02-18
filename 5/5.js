// Przykładowe wywołanie z nazwą użytkownika: "node 5.js octocat"
// Przykładowe wywołanie z nazwą użytkownika, jeśli chcemy znać liczbę followersów: "node 5.js octocat followers"

const axios = require("axios");

const userName = process.argv[2];
const followers = process.argv[3];

const getUser = async (userName) => {
  const url = `https://api.github.com/users/${userName}`;
  const response = await axios.get(url);
  return response.data;
};

const getRepositories = async (userName) => {
  const url = `https://api.github.com/users/${userName}/repos`;
  const response = await axios.get(url);
  return response.data;
};

const getWeather = async (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${location}`;
  const response = await axios.get(url);
  return response.data;
};

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
    const weather = await getWeather(user.location);

    console.log(`Weather main: ${weather.weather[0].main}`);
    console.log(`Weather description:${weather.weather[0].description}`);
  } catch (error) {
    console.log("Weather not found");
  }
})();
