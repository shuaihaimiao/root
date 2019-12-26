// pages/stjs/stjs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xxx: true,
  },
  pyx:function(){
    wx.showModal({
      title: '',
      content: '分享成功',
    })
  },
  collection: function () {
    wx.showModal({
      title: '提示',
      content: '收藏成功',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
  ,
  shall: function () {
    this.setData({
      xxx: false
    }),
      console.log(444)
  },
yyy(){
  this.setData({
    xxx:true
  })
},
  shujia: function () {
    wx.showModal({
      title: '',
      content: '这本书成功的放入了书架',
    })
  },
  /**
   * 
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