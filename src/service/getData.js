import fetch from '../config/fetch'
import { NEWSLIST, REGISTER, LOGIN } from '../config/api'

// 获取新闻列表
export const newsList = page => fetch(NEWSLIST + '?page=' + page)
// 注册
export const register = data => fetch(REGISTER, data, 'post')
// 登录
export const login = data => fetch(LOGIN, data, 'post')
