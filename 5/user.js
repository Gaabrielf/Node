const request = require("request");
// const argv = require("yargs").argv;
const axios = require("axios");

// const userName = process.argv[2];
// const followers = process.argv[3];

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

module.exports = getUser;
module.exports = getRepositories;
