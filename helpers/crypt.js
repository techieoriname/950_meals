const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashString = async (str) => {
  return bcrypt.hash(str, 10);
};

const compareHash = async (str, hash) => {
  return bcrypt.compare(str, hash);
};

const generateWebToken = (data) => {
  return new Promise((resolve, reject) => {
    try {
      let token = jwt.sign(JSON.stringify(data), process.env.JWT_SECRET);
      resolve(token);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  hashString,
  compareHash,
  generateWebToken,
};
