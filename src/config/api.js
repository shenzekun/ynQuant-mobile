const port = '8111'
const domain = 'http://192.168.1.178'
const isdev = false
export let domainWhole
if (isdev) {
  domainWhole = `${domain}:${port}`
} else {
  domainWhole = 'https://ynQuant.clarkwan.com'
}
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

// 列出知识
export const KNOWLEDGELIST = `${domainWhole}/api/knowledge`

// 新增评论
export const ADDCOMMENTS = `${domainWhole}/api/comment`
