// pages/classic/classic.js
import { ClassicModel} from '../../models/classicModel.js'
import { LikeModel } from '../../models/likeModel.js'

//实例化ClassicModel
let classicModel = new ClassicModel();
//实例化likeModel
let likeModel = new LikeModel();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 设置接受页面数据的默认值为null
    classicData: null

  },

  /**
   * 生命周期函数--监听页面加载
   * 
   */
  onLoad: function(options) {

    // 获取回调函数res  数据更新
    // setDtat时将数据写入data里的
    classicModel.getLatest((res) => {
      // 将获取数据写入页面
      this.setData({
        classicData: res
      })

    });
  },


  onLike: function (event) {
    // 获取接口参数
    let behavior = event.detail.behavior
    // 传递接口参数 接口参数 点赞id  点赞类型
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
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