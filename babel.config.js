module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@constants": "./models/constants/index",
            "@hooks": "./hooks/index",
            "@fake-datas": "./models/movies/index",
            "@home-components": "./screens/Home/components/index",
            "@movie-detail-components":"./screens/Movie/Detail/components/index",
            "@helpers": "./helpers/*",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
