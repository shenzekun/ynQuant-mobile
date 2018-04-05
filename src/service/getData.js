import fetch from '../config/fetch'
import {NEWSLIST, REGISTER} from '../config/api'

// 获取新闻列表
export const newsList = (page) => fetch(NEWSLIST + '?page=' + page)
// 注册
export const register = (data) => fetch(REGISTER, data, 'post')
