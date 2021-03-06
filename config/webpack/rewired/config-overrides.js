const path = require('path');
const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
  addWebpackPlugin,
} = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// eslint-disable-next-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ActionsLoaderConfig = require('@mihanizm56/webpack-magic-redux-modules/lib/loader-config');

const CSSPlugin = config => {
  const modifiedPlugins = config.plugins.map(plugin => {
    if (
      Boolean(plugin.constructor) &&
      plugin.constructor.name === MiniCssExtractPlugin.name
    ) {
      return new MiniCssExtractPlugin({
        ...plugin.options,
        ignoreOrder: true,
      });
    }

    return plugin;
  });

  return { ...config, plugins: modifiedPlugins };
};

const StyleLoaderConfig = ({ use: [, css] }) => {
  // eslint-disable-next-line
  css.options.modules = {
    localIdentName: '[local]-[hash:base64:3]',
  };
};

const addMagicActionsLoader = () => config => {
  const newRules = [...config.module.rules, ActionsLoaderConfig()];

  return {
    ...config,
    module: { ...config.module, rules: newRules },
  };
};

module.exports =
  process.env.NODE_ENV === 'production'
    ? override(
        CSSPlugin,
        adjustStyleLoaders(StyleLoaderConfig),
        addWebpackAlias({
          '@': path.resolve(process.cwd(), 'src/'),
        }),
        addMagicActionsLoader(),
        addWebpackPlugin(new ProgressBarPlugin()),
      )
    : override(
        CSSPlugin,
        adjustStyleLoaders(StyleLoaderConfig),
        addReactRefresh({ disableRefreshCheck: true }),
        addWebpackAlias({
          '@': path.resolve(process.cwd(), 'src/'),
        }),
        addMagicActionsLoader(),
      );
