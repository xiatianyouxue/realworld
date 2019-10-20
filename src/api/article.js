/*文章相关请求模块*/
import request from '../uTils/request'

export const getArticles = () => {
  return request({
    method: 'GET',
    url: '/api/articles'
  })
}
