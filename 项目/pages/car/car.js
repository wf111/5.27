// pages/car/car.js
let arr = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: [],
    countIndex: 0,
    sumIndex: 0
  },
  remove: function (e) {
    console.log(e.target.dataset.index)
    let arr = this.data.obj
    arr.splice(e.target.dataset.index, 1)
    console.log(arr)
    this.setData({
      obj: arr
    })
    let countIndexs = 0;
    let sumIndexs = 0;
    this.data.obj.map((val, i) => {
      countIndexs += val.tid;
      sumIndexs += (val.tid * val.price)
    })
    this.setData({
      countIndex: countIndexs,
      sumIndex: sumIndexs
    })
  },
  add: function (e) {
    //this.data.list[e.target.dataset.index].count++
    //tid是count数量
    var tid = "obj[" + e.target.dataset.index + "].tid"

    this.setData({
      [tid]: ++this.data.obj[e.target.dataset.index].tid
    })
    let countIndexs = 0;
    let sumIndexs = 0;
    this.data.obj.map((val, i) => {
      countIndexs += val.tid;
      sumIndexs += (val.tid * val.price)
    })
    this.setData({
      countIndex: countIndexs,
      sumIndex: sumIndexs
    })
  },
  del: function (e) {
    //this.data.list[e.target.dataset.index].count++
    var tid = "obj[" + e.target.dataset.index + "].tid"
    this.setData({
      [tid]: --this.data.obj[e.target.dataset.index].tid
    })
    let countIndexs = 0;
    let sumIndexs = 0;
    this.data.obj.map((val, i) => {
      countIndexs += val.tid;
      sumIndexs += (val.tid * val.price)
    })
    this.setData({
      countIndex: countIndexs,
      sumIndex: sumIndexs
    })
  },
  save: function () {
    wx.navigateTo({
      url: '/pages/add/add'
    })
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
    this.setData({
      obj: getApp().globalData.cars
    })
    //console.log(this.data.obj)
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