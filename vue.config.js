module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://apis.juhe.cn',
                changeOrigin:true,
                pathRewrite: {
                    '^/api' : ""
                }
            }
        }
    }
}