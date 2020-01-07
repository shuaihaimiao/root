// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xxx: true,
    zzz: true
  },
  my:function(){
    wx.navigateTo({
      url: '../shezhi/shezhi',
    })
  },
  shouye:function(){
    wx.navigateTo({
      url: '../shouye/shouye',
    })
  },
  shujia:function(){
    wx.navigateTo({
      url: '../shujia/shujia',
    })
  },
  tansuo:function(){
    wx.navigateTo({
      url: '../tansuo/tansuo',
    })
  },
  yue:function(){
    wx.navigateTo({
      url: '../yue/yue',
    })
  },
  shall: function () {
    this.setData({
      xxx: false
    }),
      console.log(444)
  },
  yyy() {
    this.setData({
      xxx: true
    })
  },
  pinglun:function(event){
  
    wx.navigateTo({
      url: '../pinglun/ping',
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