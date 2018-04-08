import * as types from './loginTypes'
import { enter } from '../../service/getData'

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login (data) {
  console.log('登录方法')
  return dispatch => {
    dispatch(isLogining())
    // 模拟用户登录
    enter(data)
      .then(res => {
        dispatch(loginSuccess(true, res))
      })
      .catch(e => {
        if (e.message === 'Network request failed') {
          dispatch(loginError('网络请求失败'))
        } else {
          dispatch(loginError(e))
        }
      })
  }
}

function isLogining () {
  return {
    type: types.LOGIN_IN_DOING
  }
}

function loginSuccess (isSuccess, user) {
  console.log('success')
  return {
    type: types.LOGIN_IN_DONE,
    user: user
  }
}

function loginError (errorMsg) {
  console.log('error')
  return {
    type: types.LOGIN_IN_ERROR,
    errMsg: errorMsg
  }
}
