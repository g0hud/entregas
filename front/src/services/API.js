const axios = require('axios');

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

module.exports = API;