const request = require("request");
const axios = require("axios");

const getRepositories = async (userName) => {
  const url = `https://api.github.com/users/${userName}/repos`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = getRepositories;
