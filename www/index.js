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