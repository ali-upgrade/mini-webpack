const { compilation } = require("webpack");

class AnalyzWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('AnalyzWebpackPlugin', (compilation) => {
      const assets = Object.entries(compilation.assets)

      let content = `| 资源名称 | 资源大小 |
      | --- | --- |`
      assets.forEach(([filename, file]) => {
        content += `\n| ${filename} | ${Math.round(file.size() / 1024)} |`;
      })

      compilation.assets["analyze.md"] = {
        source() {
          return content;
        },
        size() {
          return content.length;
        }
      }

    })
  }
}

module.exports = AnalyzWebpackPlugin;