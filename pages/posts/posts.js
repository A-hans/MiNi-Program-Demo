// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:"2020LP夏季赛季后赛观赛指南"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let a = "2020LP夏季赛季后赛观赛指南";
    // console.log(a);
    let content ={
      title:"2020LPL夏季赛季后赛观赛指南",
      image:"/images/lpl.png",
      content:"英雄联盟赛事官网,LPL职业联赛,全球总决赛,季中冠军赛,德玛西亚杯,国内外赛事,丰富的英雄联盟赛事资讯与各类大型赛事直播尽在英雄联盟赛事官方网站",
      views:102,
      likes:92,
      avatar:"/images/avatar/3.png",
      date:"Nov 18 2020"
    }
    this.setData(content)
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