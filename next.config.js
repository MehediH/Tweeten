const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});