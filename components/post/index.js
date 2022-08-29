// components/post/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        res: Object
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     * 自定义组件的自定义事件产生
     * 点击组件后的事件由组件的使用者决定
     */
    methods: {
        onTap(event){
            // 在 properties 中可以直接获得参数，不需要在自定义组件中进行数据绑定 data-post-id="{{res.postId}}" 
            const pid = this.properties.res.postId;
            this.triggerEvent('posttap', {
                pid
            })
        },
    }
})
