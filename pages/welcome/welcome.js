// pages/welcome/welcome.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 捕捉事件回调函数
     */
    onTap(params) {
        // 跳转到子页面，可以返回上一级，子页面嵌套不能大于10
        /*wx.navigateTo({
            url: '/pages/posts/posts',
        })*/
        /*wx.redirectTo({
          url: '/pages/posts/posts',
        })*/
        // 跳转到带有选项卡 tab Bar 的页面需要使用 switchTab
        wx.switchTab({
            url: '/pages/posts/posts',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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