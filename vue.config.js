module.exports = {
    devServer : {
        proxy: {
            '/dianying' : {
                target : 'https://m.maoyan.com',
                changeOrigin : true,
                //https请求需要该设置
                secure: false,
            },     
            '/ajax' : {
                target : 'https://m.maoyan.com',
                changeOrigin : true,
                //https请求需要该设置
                secure: false,
            }
        }
    }
}