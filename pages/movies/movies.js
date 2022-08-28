// pages/movies/movies.js
const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        inTheaters: [],
        comingSoon: [],
        filmClassics: [],
        searchResult: false,
        searchData: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.request({
            // API 地址
            url: app.gBaseUrl + 'in_theaters',
            data: {
                // 接口参数
                start: 5, count: 3
            },
            success:(res) => {
                this.setData({
                    inTheaters: res.data.subjects
                })
            }
        });
        wx.request({
            url: app.gBaseUrl + 'coming_soon',
            data: {
                start: 1, count: 3
            },
            success:(res) => {
                this.setData({
                    comingSoon: res.data.subjects
                })
            }
        });
        wx.request({
            url: app.gBaseUrl + 'top250',
            data: {
                start: 6, count: 3
            },
            success:(res) => {
                this.setData({
                    filmClassics: res.data.subjects
                })
            }
        });
    },

    /**
     * 电影页跳转
     */
    onGoToMore(event) {
        const type = event.currentTarget.dataset.type;

        wx.navigateTo({
          url: '/pages/more-movie/more-movie?type=' + type,
        })
    },

    /**
     * 搜索栏点击查询事件
     */
    onConfirm(event) {
        this.setData({
            searchResult: true
        });

        wx.request({
            url: app.gBaseUrl + 'search',
            data: {
                q: event.detail.value
            },
            success:(res) => {
                this.setData({
                    searchData: res.data.subjects
                })
            }
        })
    },

    /**
     * 搜索取消事件
     */
    onSearchCancel(event) {
        this.setData({
            searchResult: false
        })
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