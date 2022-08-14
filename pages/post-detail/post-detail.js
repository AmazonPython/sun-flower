// pages/post-detail/post-detail.js
// 导入数据文件
import {postList} from '../../data/data.js';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        postData: {},
        collected: false,
        _pid: null,
        _postsCollected: {},
        _mgr: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 获取文章 ID
        const postData = postList[options.pid];

        // 将 ID 储存在变量 data 里，可全局调用
        this.data._pid = options.pid;

        // 获取缓存
        const postsCollected = wx.getStorageSync('posts_collected');
        

        if(postsCollected){
            this.data._postsCollected = postsCollected
        }

        // 获取缓存
        let collected = postsCollected[this.data._pid];
      
        if(collected === undefined){
            // 如果undefined 说明文章从来没有被收藏过
            collected = false
        }

        this.setData({
            postData, collected
        });
    },

    /**
     * 背景音乐
     */
    onMusic(event) {
        const mgr = wx.getBackgroundAudioManager();
        mgr.src = postList[0].music.url;
        mgr.title = postList[0].music.title;
        mgr.img = postList[0].music.coverImg;
    },

    /**
     * 内容分享
     */
    async onShare(event) {
        try{
            const result = await wx.showActionSheet({
                itemList: ['分享到微信', '分享到朋友圈', '分享到微博'],
            });
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    },

    /**
     * 收藏页面
     */
    async onCollect(event) {
        // 通过 data 变量获取缓存
        const postsCollected = this.data._postsCollected;
        wx.getStorageSync('key');

        // 对缓存里的布尔值取反
        postsCollected[this.data._pid] = !this.data.collected;

        this.setData({
            // 更新收藏状态
            collected: !this.data.collected
        });

        wx.setStorageSync('posts_collected', postsCollected);

        // 弹窗信息
        wx.showToast({
            title: this.data.collected ? '收藏成功' : '取消收藏',
            duration: 3000,
        });

        /* 强提示弹窗 async await 写法
        // 弹窗信息         
        const result = await wx.showModal({
            title: '是否收藏文章'
        });

        if(result.confirm){
            // 通过 data 变量获取缓存        
            const postsCollected = this.data._postsCollected;        
            wx.getStorageSync('key');     
            
            // 对缓存里的布尔值取反        
            postsCollected[this.data._pid] = !this.data.collected       
            
            this.setData({            
                // 更新收藏状态            
                collected: !this.data.collected        
            })        
            wx.setStorageSync('posts_collected', postsCollected);     
        }  
        */
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