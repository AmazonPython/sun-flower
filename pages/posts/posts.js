// pages/posts/posts.js
// 导入数据文件
import {postList} from '../../data/data.js';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        a: "箜篌引"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 创建 + 更新
        this.setData({
            postList
        });
    },

    /**
     * 帖子详情页
     */
    onGoToDetail() {
        wx.navigateTo({
          url: '/pages/posts/posts',
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