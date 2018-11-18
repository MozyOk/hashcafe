module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: [
        "last 2 versions"
      ],
      grid: true,
    }),
    require('cssnano')({
      preset: [
        "default",
      ],
    }),
  ],
  map: false
};
