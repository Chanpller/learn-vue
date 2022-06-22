const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
/*关闭语法检查*/
module.exports = {
  lintOnSave: false,
 devServer:{
    proxy:"http://localhost:8080"
  }
  /*devServer:{
    proxy: {
      '/path1':{/!*请求路径*!/
          target:"http://localhost:8089",/!*转发地址*!/
          changeOrigin:true,/!*是否隐藏被代理地址*!/
          pathRewrite:{/!*路径替换*!/
            '/path1':''
          }
      },
      'path2':{
        target:"http://localhost:8090",
        changeOrigin:true,
        pathRewrite:{
          '/path1':''
        }
      }
    }
  }*/
}
/*
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
}*/
