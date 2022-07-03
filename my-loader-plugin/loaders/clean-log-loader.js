module.exports = function (content) {
  //清除文件内容中console.log
  return content.replace(/console\.log\(.*\);?/g,"");
}