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
            "@models": "./models/index",
            "@home-components": "./screens/Home/components/index",
            "@movie-detail-components":"./screens/Movie/Detail/components/index",
            "@components":'./components/index',
            "@generalService": './services/Shared/index',
            "@helpers": "./helpers/*",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
