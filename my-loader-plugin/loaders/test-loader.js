module.exports = function (content, map, meta) {
  console.log(content);
  return content;
}


// loader是一个函数
// 当webpack解析资源时，会调用相应的loader去处理
// loader接收到的文件内容作为参数，返回内容回去
//content 文件内容
//map soucemap
//meta 其他loader传递的数据