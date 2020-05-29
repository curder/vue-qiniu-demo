module.exports = {
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss')('./tailwind.config.js'),
    // eslint-disable-next-line global-require
    require('autoprefixer'),
  ],
};
