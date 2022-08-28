// pages/more-movie/more-movie.js
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        movies: [],
        _type: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const type = options.type;
        // type 是局部变量，在 onReachBottom 函数无法直接调用
        this.data._type = type;

        wx.request({
            // API 地址
            url: app.gBaseUrl + type,
            data: {
                // 接口参数
                start: 0, count: 12
            },
            success:(res) => {
                this.setData({
                    movies: res.data.subjects
                })
            }
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        let title = '';

        switch(this.data._type) {
            case 'in_theaters':
                title = '正在热映';
                break;
            case 'coming_soon':
                title = '即将上映';
                break;
            case 'top250':
                title = '影视经典';
                break;
        }

        wx.setNavigationBarTitle({
            title: title,
        })
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
        wx.request({
            url: app.gBaseUrl + this.data._type,
            data: {
                start: 0, count: 12
            },
            success:(res) => {
                this.setData({
                    movies: res.data.subjects
                });
                wx.stopPullDownRefresh()
            }
        });
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        // 加载提示
        wx.showNavigationBarLoading();
        wx.request({
            url: app.gBaseUrl + this.data._type,
            data: {
                start: this.data.movies.length, count: 12
            },
            success:(res) => {
                this.setData({
                    movies: this.data.movies.concat(res.data.subjects)
                });
                // 终止加载提示
                wx.hideNavigationBarLoading()
            }
        });
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})