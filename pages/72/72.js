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
      y2:0,
      x3:0,
      y3:0,
      x4:0,
      y4:0,
      x5:0,
      y5:0
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
  //console.log(e)
},
move1: function (e) {
  
  this.setData({ x1: e.touches[0].pageX, y1: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX1: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY1: ' + e.touches[0].pageY);
},
mytouchend:function(){
  if (Math.abs(170.4-this.data.x)<6||(Math.abs(155.2-this.data.y))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x:170.4,
    y:155.2,
    })
  }

  if (Math.abs(170.4-this.data.x1)<6||(Math.abs(155.2-this.data.y1))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x1:170.4,
    y1:155.2,
    })
  }

  if ((Math.abs(170.4-this.data.x2)<6)||((Math.abs(155.2-this.data.y2))<6)){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x2:170.4,
    y2:155.2,
    })
  }

  if (Math.abs(170.4-this.data.x3)<6||(Math.abs(155.2-this.data.y3))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x3:170.4,
    y3:155.2,
    })
  }

  if (Math.abs(170.4-this.data.x4)<3||(Math.abs(155.2-this.data.y4))<3){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x4:170.4,
    y4:155.2,
    })
  }

  if (Math.abs(170.4-this.data.x5)<3||(Math.abs(155.2-this.data.y5))<3){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x5:170.4,
    y5:155.2,
    })
  }
},
jishu:function(){
  if(this.data.x3==170.4&&this.data.y3==155.2){
    app.globalData.count++;
      }
      console.log('count:'+app.globalData.count);     
},

move2: function (e) {
  
  this.setData({ x2: e.touches[0].pageX, y2: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX2: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY2: ' + e.touches[0].pageY);
  //console.log(e)
},
move3: function (e) {
  
  this.setData({ x3: e.touches[0].pageX, y3: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX3: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY3: ' + e.touches[0].pageY);
  //console.log(e)
},
move4: function (e) {
  
  this.setData({ x4: e.touches[0].pageX, y4: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX4: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY4: ' + e.touches[0].pageY);
  //console.log(e)
},
move5: function (e) {
  
  this.setData({ x5: e.touches[0].pageX, y5: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX5: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY5: ' + e.touches[0].pageY);
  //console.log(e)
},
onLoad: function (options) {
var that=this
      wx.getSystemInfo({
        success: function (res) {
       var windowHeight= res.windowHeight;
          var windowWidth= res.windowWidth;
    var x= 4*windowWidth/320;
     var y=310*windowHeight/568;  
  
    var x1=123*windowWidth/320;
     var y1=310*windowHeight/568;  
    
    var x2=236*windowWidth/320;
     var y2=310*windowHeight/568;    
     
    var x3=4*windowWidth/320;
     var y3=407*windowHeight/568;   
    
    var x4=123*windowWidth/320;
     var y4=407*windowHeight/568;    

    var x5=236*windowWidth/320;
     var y5=407*windowHeight/568;  
          that.setData({
          x:x,
          y:y,
           x1:x1,
          y1:y1,
           x2:x2,
          y2:y2,
x3:x3,
y3:y3,
x4:x4,
y4:y4,
x5:x5,
y5:y5,
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