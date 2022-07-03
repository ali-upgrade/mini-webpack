//同步loader 不能进行异步操作
// module.exports = function (content) {
//   return content
// }

module.exports = function (content, map, meta) {
  /*
  1.是否有错误
  2.content处理后的内容
  3.source-map 继续传递source-map 准确抓取错误
  4.meta给下一个loader传递参数
  */ 
  this.callback(null, content, map, meta);
  console.log(1)
}