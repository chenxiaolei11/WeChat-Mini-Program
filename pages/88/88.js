
var app = getApp();
var init
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    t:0,
    count:0,
    h:'00',
    m:'00',
    s:'00'
  },

 onShow: function (options) {
  this.setData({
    t:app.globalData.timecount,
count:app.globalData.count
  })
  },
end:function(){
  app.end()
  
},






  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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