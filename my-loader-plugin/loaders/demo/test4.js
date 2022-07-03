module.exports = function (content) {
  console.log('normal loader');
  return content
}

module.exports.pitch = function () {
  console.log('pitch loader');
}


//pitch 先于 normal执行 
//存在多个是，pitch先执行且位置从左到右  熔断机制 洋葱模型