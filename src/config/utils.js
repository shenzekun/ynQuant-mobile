// 得到换行符
export function getLineBreak (str, replaceSign) {
  return str.replace(/<br \/>/g, replaceSign)
}
