import fetch from '../config/fetch'
import {NEWSLIST} from '../config/api'

// 获取新闻列表
export const newsList = (page) => fetch(NEWSLIST + '?page=' + page)
