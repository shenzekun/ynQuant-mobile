const initialState = {
  status: '点击登录',
  isSuccess: false,
  user: null,
  errMsg: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_IN_DOING':
      return {
        ...state,
        status: '正在登陆',
        isSuccess: false,
        user: null
      }
    case 'LOGIN_IN_DONE':
      return {
        ...state,
        status: '登陆成功',
        isSuccess: true,
        user: action.user
      }
    case 'LOGIN_IN_ERROR':
      return {
        ...state,
        status: '登录出错',
        isSuccess: false,
        user: null,
        errMsg: action.errMsg
      }
    default:
      return state
  }
}
