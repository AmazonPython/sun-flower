// pages/posts/posts.js
// 导入数据文件
import {postList} from '../../data/data.js';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        // 创建 + 更新
        wx.setStorageSync('key', true); // 新增缓存数据
        // 修改缓存数据 wx.setStorageSync('key', false) 
        // 删除缓存数据 wx.removeStorageSync({ key: 'key' }) 
        // 清空所有缓存数据 wx.clearStorageSync() 

        // 异步获取缓存
        /*wx.setStorageSync('flag', 2);
        const flag = await wx.getStorage({
            key:'flag',
        });
        console.log(flag);*/

        this.setData({
            postList
        });
    },

    /**
     * 帖子详情页
     */
    onGoToDetail(event) {
        // 事件对象 在页面与页面间数据通信，查询参数
        const pid = event.currentTarget.dataset.postId | event.detail.pid;

        wx.navigateTo({
          url: '/pages/post-detail/post-detail?pid=' + pid,
        })
    },

    /**
     * 阻止事件冒泡
     */
    onMaxImage(event) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})