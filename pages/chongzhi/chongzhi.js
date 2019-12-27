Page({

  /**
   * 页面的初始数据
   */
  data: {
    close: true,
    Modalbg: false,
    money:"",
    values:""
  },
 
  payment() {
    if (this.data.money>0){
      this.setData({
        close: false,
        Modalbg: true,
        values: this.data.money
      })
  }else{
      wx.showToast({
        title: '请输入正确金额',
      
        duration: 1000
      })
  }

  },
  close() {
    this.setData({
      close: true,
      Modalbg: false
    })

  },
  emailInput: function (e) {
    this.setData({
      money: e.detail.value
    });

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


