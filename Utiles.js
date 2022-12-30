const bcrypt = require("bcrypt");

// function with general usages
function hashedData(data) {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(data, salt);
  return hashed;
}
module.exports = {
  hashedData,
};
