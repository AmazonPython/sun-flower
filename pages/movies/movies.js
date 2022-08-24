// pages/movies/movies.js
const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        inTheaters: [],
        comingSoon: [],
        filmClassics: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.request({
            // API 地址
            url: app.gBaseUrl + 'in_theaters?start=5&count=3',
            success:(res) => {
                console.log(res);
                this.setData({
                    inTheaters: res.data.subjects
                })
            }
        });
        wx.request({
            url: app.gBaseUrl + 'coming_soon?start=1&count=3',
            success:(res) => {
                console.log(res);
                this.setData({
                    comingSoon: res.data.subjects
                })
            }
        });
        wx.request({
            url: app.gBaseUrl + 'top250?start=6&count=3',
            success:(res) => {
                console.log(res);
                this.setData({
                    filmClassics: res.data.subjects
                })
            }
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})