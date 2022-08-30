// components/movie/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        movie: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onGoToDetail(event){
            // 在 properties 中可以直接获得参数，不需要在自定义组件中进行数据绑定 
            const mid = this.properties.movie.id;
            wx.navigateTo({
                url: '/pages/movie-detail/movie-detail?mid=' + mid
            })
        }
    }
})
