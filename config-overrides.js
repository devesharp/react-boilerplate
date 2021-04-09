const { addBabelPlugin, override } = require('customize-cra');
const argv = require('yargs-parser')(process.argv.slice(2));

module.exports = function overrideConfig(config, env) {
   /**
    * Trocar enviroments para prod
    */
   if (argv.prod || env === 'production') {
      config.resolve.extensions = ['.prod.ts', ...config.resolve.extensions];
   }

   return override(
      addBabelPlugin([
         'babel-plugin-root-import',
         {
            rootPathSuffix: 'src',
         },
      ]),
   )(config, env);
};
