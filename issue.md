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
