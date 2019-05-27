// pages/test5/test5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: '',
    dataAll: '',
    num: 4,
    imgUrls: ["http://p0.meituan.net/movie/0fd9d06392d1b275705c7300317e924675865.jpg",
      "http://p1.meituan.net/movie/3b1d4cc31f42b8d6e47f25fe790b682485449.jpg",
      "http://p0.meituan.net/movie/fb1cd644e9128ea5963b48d4ba04ac5257379.jpg",
      "http://p1.meituan.net/movie/06b0ed71631aa2f664bf019984136ef777358.jpg",
      "http://p0.meituan.net/movie/e805f225295e5f3e6fb94cca9c79797e91473.jpg",
      "http://p1.meituan.net/movie/cbfd9de709d7e6ff90c9fdd85e87a9c577003.jpg"
    ],
    flagTab: '0',
    cur: "北京",
    flagDialog: false,
    dialogData: {},
    coming:''
  },
  /**
   * 自定义函数
   */
  handleClick(event) {
    const that=this;
    this.setData({
      flagTab: event.currentTarget.dataset.key
    })
    if (event.currentTarget.dataset.key === '1') {
      wx.request({
        url: 'http://m.maoyan.com/ajax/mostExpected?ci=1&limit=10&offset=0&token=',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          res.data.coming.map((item) => {
            item.img = item.img.replace('w.h', '128.180')
          })
         
          that.setData({
            coming: res.data.coming
          },()=>{
            console.log(that.data.coming)
          })
        }
      })
      wx.request({
        url: 'http://m.maoyan.com/ajax/comingList?ci=1&token=&limit=10',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          res.data.coming.map((item) => {
            item.img = item.img.replace('w.h', '128.180')
          })
          
          that.setData({
            dataAll: res.data.coming,
            data: res.data.coming.slice(0, 4)
          })
        }
      })
    }else{
      this.onLoad();
    }
  },

  //上拉加载更多
  scrolltolower() {
    wx.showLoading();
    let count = this.data.num;
    count++;
    this.setData({
      num: count
    })
    let start = this.data.num;
    let end = start + 4;
    let data = this.data.data;
    if (this.data.dataAll.slice(start, end).length) {
      this.data.dataAll.slice(start, end).map((item) => {
        data.push(item)
        this.setData({
          data: data
        })
        wx.hideLoading();
      })
    }
  },

  myeventFlag(e) {
    this.setData({
      dialogData: e.detail.val,
      flagDialog: !this.data.flagDialog
    })
  },

  closeDialog() {
    this.setData({
      flagDialog: !this.data.flagDialog
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    wx.request({
      url: 'https://api.maoyan.com/mmdb/movie/v4/list/hot.json?',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        res.data.data.hot.map((item) => {
          item.img = item.img.replace('w.h', '128.180')
        })
        that.setData({
          dataAll: res.data.data.hot,
          data: res.data.data.hot.slice(0, 4)
        })
      }
    })
    // 接受参数
    if (options.cur) {
      this.setData({
        cur: options.cur
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    //console.log(this.data.data);
    this.setData({
      data: this.data.dataAll.slice(0, 4),
      num: 4
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})