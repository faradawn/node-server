# RequireJs 如何配置 jQuery 和 Lodash

![requirejs](https://user-images.githubusercontent.com/73060648/131826352-705df608-ad03-469e-bccd-3b3dcdff68e5.jpg)  

知乎原文：https://zhuanlan.zhihu.com/p/406045116

## 1）下载与安装
前往官方 [Download RequireJS](https://requirejs.org/docs/download.html#requirejs) ，点击"Minified"并复制代码，在文件夹新建require.js文件并粘贴。
然后在index.html的head最后，添加这个script ：
`<script data-main="index" src="lib/require.js"></script>`

这是完整的 index.html：
```html
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
  <meta charset="UTF-8">
  <title>远南岛的 RequireJs</title>
  <script data-main="index" src="lib/require.js"></script>
</head>
<body>
  <div>
    <h1 id="title-1">CDN jQuery 你好！</h1>
    <button id="button-1">点我换颜色</button>
    <h1 id="title-2">本地 Lodash 你好！<pre id="res"></pre></h1>
    <button id="button-2">点我随机数</button>
  </div>
</body>
</html>
```

## 2）配置 requireJs
新建index.js文件，填入以下配置：
```js
require.config({
  baseUrl: './lib', // 默认为index.html所在的目录
  paths: {
      myScripts: '../app/myScripts', // 相对于 baseUrl path
      jquery: ['https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery'], // CDN path
      lodash: 'lodash' // 可以不用加
  }
});

require(['myScripts', 'jquery', 'lodash'], function(myScripts, $, _){
  $('#button-1').click(function(){myScripts.changeColor(1)})
  $('#button-2').click(function(){myScripts.setResult(_.random(1,5))})
});
```

现在详细说下require.config全局配置都能写啥：
- `baseUrl` 类似“快捷路径”，这里设在了lib 文件夹。之后调取lib/lodash.js就可以直接输 lodash 了。  
- `paths` 是在baseUrl之上额外创建的快捷路径，不仅可以本地也能CDN，比如这里的 jQury的引入。  
- `shim` 是“垫子”，若引入的模块没有AMD版本，可以这样“垫”一下它们：  
```js
require.config({
    shim: {
        "underscore" : {
            exports : "_";
        },
        "jquery.form" : ["jquery"]
    }
})
```

## 3）写自己的模块
写自己的js模块也很容易，使用define的语法就可以了。 
下面是myScripts.js的完整代码，可看到直接调用jquery就可以，因为它的路径已经在index.js的全局配置定义好了。  
```js
define(['jquery'], {
  changeColor: function(n){
    let a = document.getElementById('title-'+n)
    a.style.color = a.style.color === 'blue' ? 'red' : 'blue'
  },
  setResult: function(n){
    $('#res').html(n)
  }
})
```


上方的写法是 return 了一个含有两个函数的 object。如果只 return 函数，可以省去函数的名字：
```js
define(function (n){
  return n + 10
})
```

这是 GitHub 全部代码: https://github.com/faradawn/node-server  

恭喜你已经掌握了 requireJs 最核心的操作 🎉！

远南岛，

祝度过愉快的一天

