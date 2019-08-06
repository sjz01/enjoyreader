module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://zhouxunwang.cn',
                changeOrigin:true,
                pathRewrite: {
                    '^/api' : ""
                }
            },
            '/bole':{
                target:'http://123.56.195.82:9999',
                changeOrigin:true,
                pathRewrite: {
                    '^/bole' : ""
                }
            },
      }
    },
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
}