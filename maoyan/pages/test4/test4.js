// pages/test4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    hot: [],
    list: {},
    cur: '北京',
    toView: '',
  },

  /**
   * 自定义函数
   */
  handleClick(event) {
    
    this.setData({
      cur: event._relatedInfo.anchorRelatedText
    }, () => {
      wx.navigateTo({
        url: '../test5/test5?cur=' + this.data.cur,
      })
    })
  },
  onMyEvent(e) {
    this.setData({
      cur: e.detail.val
    })
  },
  scrollTo(e) {
    this.setData({
      toView: e._relatedInfo.anchorTargetText
    },()=>{
      console.log(this.data.toView)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    wx.request({
      url: 'http://m.maoyan.com/dianying/cities.json', // 仅为示例，并非真实的接口地址
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        let obj = {};
        let newObj = {};
        let key = [];
        that.setData({
          data: res.data.cts,
          hot: res.data.cts.slice(0, 11)
        })
        res.data.cts.map((item) => {
          let key = item.py.substring(0, 1).toLocaleUpperCase();
          if (obj[key]) {
            obj[key].push(item.nm)
          } else {
            obj[key] = [];
            obj[key].push(item.nm);
          }
        })
        let keys = Object.keys(obj).sort();
        keys.map((item) => {
          newObj[item] = obj[item]
        })
        key = Object.keys(newObj);
        that.setData({
          list: newObj,
          key: key
        })
      }
    })
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