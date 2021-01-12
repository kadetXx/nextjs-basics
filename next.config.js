// test plugin for desmonstration
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  webpack: {
    // plugins: [new BundleAnalyzerPlugin()]
  }
}

// alternative method

// const { PHASE_PRODUCTION_SERVER } = require('next/constants')

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