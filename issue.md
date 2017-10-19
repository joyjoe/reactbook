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