const { compilation } = require("webpack");

class BannerWepackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapaAsync('BannerWepackPlugin', (compilation) => {
      
    })
  }
}