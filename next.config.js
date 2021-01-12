// CONFIG FOR USING WEBPACK PLUGINS

// module.exports = {
//   webpack: {
//     // webpack config properties
//   },
//   env: {
//     MY_ENV_VAR: process.env.SECRET
//   }
// }

// const { PHASE_PRODUCTION_SERVER } = require('next/constants')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_PRODUCTION_SERVER) {
//     return {
//       ...defaultConfig,
//       webpack: {
//         plugins: [new BundleAnalyzerPlugin()]
//       }
//     }
//   }

//   return defaultConfig
// }

// CONFIG EXAMPLE FOR USING NEXT JS PLUGINS

// next.config.js
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();


const withNextEnv = nextEnv();
module.exports = withNextEnv();
