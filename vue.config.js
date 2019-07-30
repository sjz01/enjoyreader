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
            }
        }
    }
}