# 样式

* 内联样式    
  给组件添加一个名为style的属性props,赋值为style对象。
  ```
  const appStyle = {
    "backgroundColor" : "red",
    "padding-bottom" : "14px",
    "margin": "10px auto 15px"
  };
  render(){
    return (
      <App style={appStyle} className="class" />
    )
  }
  ```

* 避免使用ClassName
  比如html代码是拷贝的，那么如何避免手动修改所有的class名字，使用插件babel-plugin-react-transform      
  ```
  .babelrc
  {
    "plugins":[
      "react-html-attrs"
    ]
  }
  ```

* CSS模块化
  使用css-loader加配置来实现CSS模块化    
  ```
  npm install css-loader
  {
    test: /\.css$/,
    use: [
      "style-loader", {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[name]__[local]__[hash:base64]"
        }
      }
    ]
  }
  ```
  在ReactJSX中，通过引入模块，可以使用变量的形式来引用，另外在CSS文件中可以使用如下语法定义全局类样式   
  ```
  :global(.className){...style...}
  ```