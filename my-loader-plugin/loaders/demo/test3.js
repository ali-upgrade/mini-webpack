//raw loader 接受Buffer数据

module.exports = function(centent) {
  console.log(centent);
  return centent;
}

module.exports.raw = true