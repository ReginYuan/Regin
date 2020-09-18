// components/like/index.js
Component({
  /**
   * 组件的属性列表
   * 开放的数据，可以从外部改变的
   */
  properties: {
    like: {
      // type:Number,String,Object,Boolean
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 数据绑定
    // 三元表达式
    // 封装性  开放性
    // 封装在内部，开放出来
    // 粒度  组件可以封装非常简单的功能  组件也可以封装非常复杂的功能  
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'

  },

  /**
   * 组件的方法列表
   * let定义块级作用域,var可以定义全局作用域
   */
  methods: {
    onLike: function(event) {
      let like = this.properties.like
      let count = this.properties.count
      count = like ? count - 1 : count + 1
      // 更新数据
      this.setData({
        count: count,
        like: !like
      })


      // 获取组件当前的状态
      let behavior = this.properties.like ? "like" : "cancel"
      // 激活事件 like方法  在classic.wxml组件中绑定
      this.triggerEvent('like', {
        behavior: behavior
      }, {})

    }
  }
})