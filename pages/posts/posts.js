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
        let content = [{
            postDate: "2002-02-02",
            avatar: "/images/avatar/4.png",
            author: "Hugo",
            title: "箜篌引",
            content: "公無渡河，公竟渡河。墮河而死，將奈公何。\n\n《箜篌引》是一首被翻譯成漢語保存下來的古朝鮮歌謠，是朝鮮文學史現存最早的古代歌謠之一。東漢蔡邕的《琴操·九引》和西晉崔豹的《古今注·音樂》都收有這首歌謠。據記載，古朝鮮人艄公崔子高清晨撐船，見一白髮狂夫披頭散髮，手提酒壺，亂流而渡。其妻在後緊追勸阻，但沒能追上，眼睜睜看着丈夫溺水而亡。其妻悲痛欲絕，彈箜篌「公無渡河」之歌宣洩哀傷，後投河自盡。崔子高回家後將所見所聞講給妻子麗玉。麗玉深受感動，作《箜篌引》。此歌全篇僅16字，但意尤深遠。",
            postImgSrc: "/images/post/crossARiver.jpg",
            view: "666",
            collection: "33",
            postId: "3"
        },{
            postDate: "2002-02-02",
            avatar: "/images/avatar/3.png",
            author: "Dante",
            title: "石壕吏",
            content: "暮投石壕村，有吏夜捉人。\n老翁逾墙走，老妇出门看。\n吏呼一何怒！妇啼一何苦！\n听妇前致词：三男邺城戍。\n一男附书至，二男新战死。\n存者且偷生，死者长已矣！\n室中更无人，惟有乳下孙。\n有孙母未去，出入无完裙。\n老妪力虽衰，请从吏夜归。\n急应河阳役，犹得备晨炊。\n夜久语声绝，如闻泣幽咽。\n天明登前途，独与老翁别。\n\n759年（唐肃宗乾元二年）春，四十八岁的杜甫由左拾遗贬为华州司功参军。他离开洛阳，历经新安、石壕、潼关，赶往华州任所。这时，杜甫正由新安县继续西行，投宿石壕村，遇到吏卒深夜捉人，于是实录所见所闻，写成这篇不朽的诗作。",
            postImgSrc: "/images/post/angry.jpg",
            view: "444",
            collection: "22",
            postId: "4"
        }];

        // 将数组包装成对象
        this.setData({
            posts:content
        });
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