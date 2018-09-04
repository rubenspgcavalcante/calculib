const { ContextReplacementPlugin } = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const { npm_package_config_excludes = "" } = process.env;
const excludes = npm_package_config_excludes
  .split(",")
  .map(excl => excl.trim())
  .filter(excl => excl !== "");

const excludeContext = new RegExp(`^(?!.*(?:${excludes.join('|')})).*\\.op\\.js$`);

if(excludes.length){
  console.info(`[INFO] Custom build detected. Excluding from bundle: ${excludes.join(', ')}`);
}

module.exports = (env = {}) => {
  const { analyze = false } = env;
  return {
    module: {
      rules: [{ test: /.js$/, use: "babel-loader" }]
    },
    plugins: [
      analyze ? new BundleAnalyzerPlugin() : null,
      new ContextReplacementPlugin(
        /operations/,
        excludes.length ? excludeContext : /\.op\.js$/
      )
    ].filter(p => p)
  };
};
