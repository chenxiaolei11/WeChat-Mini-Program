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
      y4:0
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
  if (Math.abs(192-this.data.x)<6||(Math.abs(176-this.data.y))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x:192,
    y:176,
    })
  }

  if (Math.abs(181.6-this.data.x1)<6||(Math.abs(166.4-this.data.y1))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x1:181.6,
    y1:166.4,
    })
  }

  if ((Math.abs(181.6-this.data.x2)<6)||((Math.abs(166.4-this.data.y2))<6)){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x2:181.6,
    y2:166.4,
    })
  }

  if (Math.abs(181.6-this.data.x3)<6||(Math.abs(166.4-this.data.y3))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x3:181.6,
    y3:166.4,
    })
  }

  if (Math.abs(168-this.data.x4)<6||(Math.abs(150-this.data.y4))<6){  //当小于2px的可接受阈值时，验证成功
    var that=this;  //当小于2px的可接受阈值时，验证成功
    that.setData({
    x4:168,
    y4:150,
    })
  }
},
jishu:function(){
  if(this.data.x2==181.6&&this.data.y2==166.4){
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
onLoad: function (options) {
var that=this
      wx.getSystemInfo({
        success: function (res) {
       var windowHeight= res.windowHeight;
          var windowWidth= res.windowWidth;
    var x= 4*windowWidth/320;
     var y=325*windowHeight/568;  
  
    var x1=123*windowWidth/320;
     var y1=325*windowHeight/568;  
    
    var x2=260*windowWidth/320;
     var y2=325*windowHeight/568;    
     
    var x3=48*windowWidth/320;
     var y3=407*windowHeight/568;   
    
    var x4=174*windowWidth/320;
     var y4=407*windowHeight/568;    
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