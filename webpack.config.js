var glob = require("glob");

module.exports = {
  entry: glob.sync("./js/*.js"),
  output: {
    filename: 'bundle.js'
  }
};
