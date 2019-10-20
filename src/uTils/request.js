//基于axios封装的模块
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})
export default request
