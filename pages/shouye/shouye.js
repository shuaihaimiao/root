// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  cixin:function(){
wx.navigateTo({
  url: '../liucixin/liucixin',
})
  },
  rankingall:function(){
wx.navigateTo({
  url: '../ranking/ranking',
})
  },
  stjs:function(){
    wx.navigateTo({
      url: '../stjs/stjs',
    })
  },
all:function(){
  wx.navigateTo({
    url: '../fenleiall/fenleiall',
  })
},
  tansuo:function(){
    wx.navigateTo({
      url: '../tansuo/tansuo',
    })
  },
  shujia:function(){
    wx.navigateTo({
      url: '../shujia/shujia',
    })
  },
  wode:function(){
    wx.navigateTo({
      url: '../my/my',
    })
  },
  kehuan:function(){
    wx.navigateTo({
      url: '../kehuan/kehuan',
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
