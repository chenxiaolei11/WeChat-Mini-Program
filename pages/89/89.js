Page({

  data:{
  
   height: '',
  
   width: '',
  
  },
  
  
  onLoad: function () {
    this.setData({
      height: wx.getSystemInfoSync().screenHeight,
      width: wx.getSystemInfoSync().screenWidth
    })
    console.log(this.data.height)
    console.log(this.data.width)
  }
  })