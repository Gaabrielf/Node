const request = require("request");

const axios = require("axios");
// const argv = require("yargs").argv;

// const userName = process.argv[2];
// const followers = process.argv[3];

const getWeather = async (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${location}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = getWeather;
