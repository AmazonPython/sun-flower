// pages/movie-detail/movie-detail.js
import {convertToCastString, convertToCastInfos} from '../../utils/util.js';

const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const mid = options.mid;
        wx.request({
            // API 地址
            url: app.gBaseUrl + 'subject/' + mid,
            success:(res) => {
                this.processMovieData(res.data)
            }
        })
    },

    /**
     * 图片放大
     */
    onViewPost(event) {
        wx.previewImage({
            urls: [this.data.movie.image],
        })
    },

    /**
     * 数据预处理
     */
    processMovieData(movie){
        const data = {};
        data.directors = convertToCastString(movie.directors);
        data.casts = convertToCastString(movie.casts);
        data.image = movie.images.large;
        data.title = movie.title;
        data.subtitle = movie.countries[0] + ' ' + movie.year;
        data.wishCount = movie.wish_count;
        data.commentsCount = movie.comments_count;
        data.rating = movie.rating.stars / 10;
        data.average = movie.rating.average;
        data.genres = movie.genres.join('、');
        data.summary = movie.summary;
        data.castsInfo = convertToCastInfos(movie.casts);
        this.setData({
            movie: data
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        wx.setNavigationBarTitle({
            title: '电影介绍',
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