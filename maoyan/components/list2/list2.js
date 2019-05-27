// components/list2/list2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    key: String,
    data: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event) {
      this.triggerEvent('myevent', {
        val: event._relatedInfo.anchorRelatedText
      });
      wx.navigateTo({
        url: '../../pages/test5/test5?cur=' + event._relatedInfo.anchorRelatedText,
      })
    }
  }
})