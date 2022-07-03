//处理图片，字体等文件，它们都是buffer数据 使用raw loader
//根据文件内容生成带hash值文件名
const loaderUtils = require("loader-utils")
module.exports = function (content) {
  // 根据文件内容生成带有hash值文件
  let inter = loaderUtils.interpolateName(this, "[hash].[ext][query]",{
    content,
  });
  // 输出到images目录下
  inter = `images/${inter}`;
  // console.log(inter);
  // 将文件输出出去·
  this.emitFile(inter, content);
  //返回 module.exports = "文件路径文件名"
  return `module.exports = "${inter}"` 
}

module.exports.raw = true;