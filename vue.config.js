module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://zhouxunwang.cn',
                changeOrigin:true,
                pathRewrite: {
                    '^/api' : ""
                }
            }
        }
    }
}