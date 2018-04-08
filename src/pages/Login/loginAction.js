import * as types from './loginTypes'
import { enter } from '../../service/getData'

export function login (data) {
  return dispatch => {
    dispatch(isLogining())
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
  return {
    type: types.LOGIN_IN_DONE,
    user: user
  }
}

function loginError (errorMsg) {
  return {
    type: types.LOGIN_IN_ERROR,
    errMsg: errorMsg
  }
}
