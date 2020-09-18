import {
  HTTP
} from '../util/http.js'
class LikeModel extends HTTP {

  // art_id: 点赞对象,例如你想对电影进行点赞，那这个参数就是电影的id号
  // type：点赞类型分为四种：100 电影 200 音乐 300 句子 400 书籍

  // POST /like  进行点赞接口
  // POST /like/cancel  取消点赞接口
  like(behavior, artId, category) {
    let url = behavior === 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artId,
        type: category
      }
    })
  }

}
  export {
  LikeModel
  }