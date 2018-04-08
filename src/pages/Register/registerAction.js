import * as types from './registerTypes'
import { enroll } from '../../service/getData'

export function register (data) {
  return dispatch => {
    dispatch(isRegister())
    enroll(data)
      .then(() => {
        dispatch(registerSuccess())
      })
      .catch(e => {
        if (e.message === 'Network request failed') {
          dispatch(registerError('网络请求失败'))
        } else {
          dispatch(registerError(e))
        }
      })
  }
}

export function init () {
  return dispatch => {
    dispatch(initData())
  }
}

function initData () {
  return {
    type: types.INITDATA
  }
}

function isRegister () {
  return {
    type: types.REGISTER_IN_DOING
  }
}

function registerSuccess () {
  return {
    type: types.REGISTER_IN_DONE
  }
}

function registerError (errorMsg) {
  return {
    type: types.REGISTER_IN_ERROR,
    errMsg: errorMsg
  }
}
