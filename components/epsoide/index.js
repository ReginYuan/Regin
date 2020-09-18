// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 定义期刊号
    index: {
      type: String,
      /*
       *observer函数
       *千万不要在observer中修改自身属性,注意防范内存泄漏
       */
      observer: function (newVal, oldVal, changedPath) {
        let val = newVal < 10 ? '0' + newVal : newVal;
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    year: 0,
    month: '',
    _index: ''
  },

  /**
   * 	生命周期函数
   */
  attached: function () {
    /* 获取月份*/
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    this.setData({
      year: year,
      month: this.data.months[month],
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})