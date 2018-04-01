// 得到换行符
export function getLineBreak (str, reg, replaceSign) {
  return str.replace(reg, replaceSign)
}
// 获取天数
export function getDay (str) {
  return str.replace(/\d{4}-\d{2}-(\d{2})/g, '$1')
}
// 获取月数
export function getMonth (str) {
  return str.replace(/\d{4}-(\d{2})-\d{2}/g, '$1')
}
// 获取时间
export function getTime (str) {
  return str.replace(/\d{4}-\d{2}-\d{2}\s+(\d{2}:\d{2}):\d{2}/g, '$1')
}
