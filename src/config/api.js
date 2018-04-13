const port = '8111'
const domain = 'http://192.168.1.180'
export const domainWhole = `${domain}:${port}`
// 获取新闻列表
export const NEWSLIST = `${domainWhole}/api/news/list`

// 获取新闻详情
export const NEWSDETAIL = `${domainWhole}/api/news`

// 获取新闻评论
export const NEWSCOMMNETS = `${domainWhole}/api/news/comments`

// 注册
export const REGISTER = `${domainWhole}/user/regist`

// 登录
export const LOGIN = `${domainWhole}/user/login`

// 获取评论点赞数
export const COMMENTLIKE = `${domainWhole}/api/comment/like`
