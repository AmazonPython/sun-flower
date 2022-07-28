// pages/posts/posts.js
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
    onLoad: function (options) {
        // 创建 + 更新
        let content = {
            headImgSrc: {
                one: "/images/post/genshin.jpg",
                two: "/images/post/curiosity.jpg",
                three: "/images/post/sls.jpg"
            },
            postDate: "2002-02-02",
            avatar: "/images/avatar/4.png",
            author: "Hugo",
            title: "箜篌引",
            content: "公無渡河，公竟渡河。墮河而死，將奈公何。\n\n《箜篌引》是一首被翻譯成漢語保存下來的古朝鮮歌謠，是朝鮮文學史現存最早的古代歌謠之一。東漢蔡邕的《琴操·九引》和西晉崔豹的《古今注·音樂》都收有這首歌謠。據記載，古朝鮮人艄公崔子高清晨撐船，見一白髮狂夫披頭散髮，手提酒壺，亂流而渡。其妻在後緊追勸阻，但沒能追上，眼睜睜看着丈夫溺水而亡。其妻悲痛欲絕，彈箜篌「公無渡河」之歌宣洩哀傷，後投河自盡。崔子高回家後將所見所聞講給妻子麗玉。麗玉深受感動，作《箜篌引》。此歌全篇僅16字，但意尤深遠。",
            postImgSrc: "/images/post/crossARiver.jpg",
            view: "666",
            collection: "33",
            postId: "3"
        };
    
        this.setData(content);
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