import request from '../uTils/request'

export const getTags = () => {
  return request({
    method: 'GET',
    url: '/api/tags'
  })
}
