import * as types from './registerTypes'
const initialState = {
  status: '点击注册',
  isSuccess: false,
  errMsg: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_IN_DOING:
      return {
        ...state,
        status: '正在注册',
        isSuccess: false
      }
    case types.REGISTER_IN_DONE:
      return {
        ...state,
        status: '注册成功',
        isSuccess: true
      }
    case types.REGISTER_IN_ERROR:
      return {
        ...state,
        status: '注册出错',
        isSuccess: false,
        errMsg: action.errMsg
      }
    case types.INITDATA:
      return {
        ...state,
        status: '点击注册',
        isSuccess: false
      }
    default:
      return state
  }
}
