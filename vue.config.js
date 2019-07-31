module.exports = {
    devServer:{
        proxy:{
            '/api':{
                // http://apis
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
            }        
      }
    }
}