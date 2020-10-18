var init


App({
  onShow: function (options) {
    var that=this
    clearInterval(init);
    this.globalData.hour=0,
    this.globalData.minute=0,
    this.globalData.second=0,
    this.globalData.millisecond=0,
    init=setInterval(function(){
      that.onLoad()
    },1000);
    
  },

  end:function(options){
    clearInterval(init);
   
  },

  Reset:function(){
    var that=this;
    clearInterval(init);
    
    this.globalData.hour=0,
    this.globalData.minute=0,
    this.globalData.second=0,
    this.globalData.millisecond=0,
    this.globalData.timecount='00:00:00'
    
  },
  onLoad:function(){
    var that = this;
    console.log(this.globalData.millisecond)
    
   this.globalData.millisecond=this.globalData.millisecond+1
    
    if(this.globalData.millisecond>=60){
     
      this.globalData.millisecond=0
       this.globalData.second=this.globalData.second + 1
      
    }
    if(this.globalData.second>=60){
      
      this.globalData.second=0
     this.globalData.minute=this.globalData.minute+1
      
    }
    if(this.globalData.minute>=60){ 
   this.globalData.minute=0
      this.globalData.hour=this.globalData.hour+1
    }
    that.globalData.timecount=that.globalData.hour+":"+that.globalData.minute+":"+that.globalData.second+":"+that.globalData.millisecond
    
  },
 
    
     
   
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'],
    count:0,

      hour:0,
      minute:0,
      second:0,
      millisecond:0,
      timecount:'00:00:00',
      cost:0,
      flag:1,
      endtime:"",
      h:0,
      m:0,
      s:0,
  }
})