module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com', // 代理的目标  访问慕课网里面的接口
        changeOrigin: true, // 是否将主机头的原点 更改为ur地址
        pathRewrite: { // 访问跨域地址时，把/api隐藏
          '/api': ''
        }
      }
    }
  }
}
