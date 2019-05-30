// pages/cake/cake.js
let cars=[]
import data from '../../data.js'
import list from '../../list.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    list:[],arr:[]
  },
  btnclick:function(e){
   // console.log(e.currentTarget.dataset.item)
    wx.setStorage({
      key: 'item',
      data: e.currentTarget.dataset.item
    })
    wx.navigateTo({
      url: '/pages/details/details'
    })
  },
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(data.data.list)
    console.log(list.data.list)
    this.setData({
      list: data.data.list,
      arr: list.data.list
    })

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
    wx.startPullDownRefresh()
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