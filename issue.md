# 问题汇总
* ES6中的Promise等如何通过babel-polyfill转换
  使用runtime插件 `npm install babel-plugin-transform-runtime`
  ```
  /* .babelrc */
  {
    plugins: [
      "transform-runtime"
    ]
  }
  ```   

* ES6不支持Mixins语法
  使用ES6的类语法Classes是不支持Mixins的。可以考虑使用createReactClass方法
  ```
  var createReactClass = require("create-react-class");
  createReactClass({
    mixins: [mixinObj]
  });
  ```

* react-router4版本问题
  commit-m"before init real project"为开启新项目前的最后一个提交版本，使用的是`react-router@2.8.1`,`antd@2.0.1`

* 使用react-router@2.8问题
  使用react-router之后报错`cannot read react.PropTypes`    
  git commit id: 25ea8d0