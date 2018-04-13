import fetch from '../config/fetch'
import { NEWSLIST, REGISTER, LOGIN, NEWSDETAIL, NEWSCOMMNETS, COMMENTLIKE } from '../config/api'

// 获取新闻列表
export const newsList = page => fetch(NEWSLIST + '?page=' + page)
// 获取新闻详情
export const newsDetail = id => fetch(NEWSDETAIL + '?id=' + id)
// 获取新闻评论
export const newsComments = (page = 2, id) => fetch(NEWSCOMMNETS + '?id=' + id + '&page=' + page)
// 获取新闻评论赞数
export const commentLikes = (id) => fetch(COMMENTLIKE + '?id=' + id)
// 注册
export const enroll = data => fetch(REGISTER, data, 'post')
// 登录
export const enter = data => fetch(LOGIN, data, 'post')
