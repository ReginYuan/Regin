import {
  HTTP
} from '../util/http.js'

class ClassicModel extends HTTP {


  // 从服务器代用最新的期刊
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res) //将结果回传回去
      },
      fail: (err) => {
        sCallback(err) //将结果回传回去
      }
    })
  

  }
}

export { ClassicModel}