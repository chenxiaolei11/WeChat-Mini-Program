const app = getApp()
var init
Page({
  data: {
    t:0,
  images:{},
  hour:0,
      minute:0,
      second:0,
      millisecond:0,
      timecount:'00:00:00',
      cost:0,
      flag:1,
      endtime:"",
      isShow:true,
      x:0,
      y:0,
      x1:0,
      y1:0,
      x2:0,
      y2:0
  },
    success: function(res) {
      rpx = res.windowWidth/375;
    },
  imageLoad: function(e) {
  var $width=e.detail.width, //获取图片真实宽度
  $height=e.detail.height,
  ratio=$width/$height; //图片的真实宽高比例
  var viewWidth=718, //设置图片显示宽度，左右留有16rpx边距
  viewHeight=718/ratio; //计算的高度值
  var image=this.data.images;
  //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
  image[e.target.dataset.index]={
  width:viewWidth,
  height:viewHeight
  }
  this.setData({
  images:image
  })
  }
  ,
move: function (e) {

  this.setData({ x: e.touches[0].pageX, y: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY: ' + e.touches[0].pageY);
 
},
move1: function (e) {
  
  this.setData({ x1: e.touches[0].pageX, y1: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX1: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY1: ' + e.touches[0].pageY);
 
  
},
mytouchend:function(){
  if (Math.abs(40.7-this.data.x)<6||(Math.abs(182.4-this.data.y))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x:40.7,
    y:182.4,
    })
  }
  
  if (Math.abs(40.7-this.data.x1)<6||(Math.abs(182.4-this.data.y1))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x1:40.7,
    y1:182.4,
    })
  }

  if (Math.abs(40.7-this.data.x2)<6||(Math.abs(182.4-this.data.y2))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x2:40.7,
    y2:182.4,
    })
  }
},
jishu:function(){
  if(this.data.x2==40.7&this.data.y2==182.4){
    app.globalData.count++;
      }
      console.log('count:'+app.globalData.count);     
},

move2: function (e) {
  
  this.setData({ x2: e.touches[0].pageX, y2: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX2: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY2: ' + e.touches[0].pageY);
 
},
onLoad: function (options) {
var that=this
      wx.getSystemInfo({
        success: function (res) {
       var windowHeight= res.windowHeight;
          var windowWidth= res.windowWidth;
    var x= 10*windowWidth/320;
     var y=400*windowHeight/568;  
  
    var x1=125*windowWidth/320;
     var y1=400*windowHeight/568;  
    
    var x2=239*windowWidth/320;
     var y2=400*windowHeight/568;    
        
          that.setData({
          x:x,
          y:y,
           x1:x1,
          y1:y1,
           x2:x2,
          y2:y2
          })
        }
      })
    },
  onShow: function (options) {
    clearInterval(init);
    var that=this;
    that.setData({
      hour:0,
      minute:0,
      second:0,
      millisecond:0
    })
    init=setInterval(function(){
      that.timer()
    },1000);
  },
 end:function(options){
    clearInterval(init);
  },
  Reset:function(){
    var that=this;
    clearInterval(init);
    that.setData({
      hour:0,
      minute:0,
      second:0,
      millisecond:0,
      timecount:'00:00:00'
    })
  },
  timer:function(){
    var that = this;
    console.log(that.data.millisecond)
    that.setData({
      millisecond:that.data.millisecond+1
    })
    if(that.data.millisecond>=60){
      that.setData({
        millisecond:0,
        second:that.data.second + 1
      })
    }
    if(that.data.second >= 60){
      that.setData({
        second:0,
        minute:that.data.minute+1
      })
    }
    if(that.data.minute>=60){
      that.setData({
        minute:0,
        hour:that.data.hour+1
      })
    }
    that.setData({
      timecount:that.data.hour+":"+that.data.minute+":"+that.data.second+":"+that.data.millisecond
    })
  },

  })