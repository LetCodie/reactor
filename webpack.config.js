const path = require('path');

module.exports = {
  entry: __dirname + '/src/client.js',
  output: {
    filename: 'index.js',
  },
  devServer:{
    inline: true,
    contentBase: './public',
    port:3000
  }
};
