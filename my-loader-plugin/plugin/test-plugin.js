const { compilation } = require("webpack");

class TestPlugin {
  constructor() {
    console.log('tp constructer');
  }

  apply(compiler) {
    debugger;

    console.log('tp apply')



    compiler.hooks.environment.tap('TestPlugin',() => {
      console.log('tp env')
    })
    compiler.hooks.emit.tap('TestPlugin', (compilation) => {
      console.log("to 1")
    })
    compiler.hooks.emit.tapAsync('TestPlugin', (compilation, callback) => {
      setTimeout(()=> {
      console.log("to 12")
      callback()
      },2000)
    })
    compiler.hooks.emit.tapPromise('TestPlugin', (compilation) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("to 3");
          resolve()
        }, 1000)
      })
    })

  }

}


module.exports = TestPlugin;


/* 
1.webpack加载webpack。config。js中的所有配置，此时new tp(), 执行插件的constructer
2.webpack创建compiler对象
3.遍历所有plugins中的插件，调用插件的apply方法
4.执行剩下编译流程（触发各种hooks事件）
*/