const app = getApp()
var init
Page({
  data: {
    isShow:true,
  hour:'0'+0, 
      minute:'0'+0,
      second:'0'+0,
      millisecond:'0'+0,
      timecount:'00:00:00',
      cost:0,
      flag:1,
      endtime:"",
      x1:0,
      y1:0,
      g:0,
      e:0,
     t:0,
     t1:0
  },
  
  //改变上方大图的大小
  imageLoad: function(e) {
    var that=this
  var $width=e.detail.width; //获取图片真实宽度
  var $height=e.detail.height;
  wx.getSystemInfo({
    success: function(res) {

  var windowHeight= res.windowHeight;
        var windowWidth= res.windowWidth;
  var viewWidth=$width*windowWidth/768;
  var viewHeight=$height*windowHeight/1024;

  that.setData({
    imgwidth:viewWidth,
    imgheight:viewHeight

  })
}
  })
  },

//设置下方选项的位置
  onLoad: function (options) {
    var that=this
          wx.getSystemInfo({
            success: function (res) {
            var windowHeight=res.screenHeight;
            var windowWidth= res.screenWidth;
     
              that.setData({
        g:windowWidth/375,
        e:windowHeight/667,
      
               x1:126*windowWidth/320,
              y1:400*windowHeight/568,
               t:138*windowWidth/375,
              t1:145*windowHeight/667,
              })
            }
          })
      console.log( that.data.t)
      console.log( that.data.t1)
        },

 //使图片可以移动
move1: function (e) {
  this.setData({ x1: e.touches[0].pageX, y1: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX1: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY1: ' + e.touches[0].pageY);  
},
move: function (e) {
  this.setData({ t: e.touches[0].pageX, t1: e.touches[0].pageY })//将鼠标的位置赋给图片位置数据，这样图片就可以移动了
  console.log('我正在移动')
  console.log('pageX1: ' + e.touches[0].pageX);//打印图片位置
  console.log('pageY1: ' + e.touches[0].pageY);  
},
//容错
mytouchend:function(){
  if ((Math.abs(193.6*this.data.g-this.data.x1))<6||(Math.abs(161.6*this.data.e-this.data.y1))<6){
    var that=this;  //当小于2px的可接受阈值时，验证成功
that.setData({
x1:193.6*this.data.g,
y1:161.6*this.data.e,
})
}
},

//计数
jishu:function(){
  if(this.data.x1==193.6*this.data.g&&this.data.y1==161.6*this.data.e){
    app.globalData.count++;
      }
      console.log('count:'+app.globalData.count);    
},

//计时器
  onShow: function (options) {
    clearInterval(init);
    var that=this;
      that.data.hour=0,
      that.data.minute=0,
      that.data.second=0,
      that.data.millisecond=0
    init=setInterval(function(){
      that.timer()
    },1000);
  },
 end:function(options){
    clearInterval(init);
  },
 
  timer:function(){
    var that = this;
    console.log(that.data.millisecond)
      that.data.millisecond=that.data.millisecond+1
    if(that.data.millisecond>=60){
        that.data.millisecond=0,
        that.data.second=that.data.second + 1
    }
    if(that.data.second >= 60){
        that.data.second=0,
        that.data.minute=that.data.minute+1
    }
    that.setData({
      timecount:that.data.hour+":"+that.data.minute+":"+that.data.second+":"+that.data.millisecond
    })
  },
  })