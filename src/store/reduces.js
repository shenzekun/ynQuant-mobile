import {combineReducers} from 'redux'

import Home from '../pages/Home/homeReduce'
import Setting from '../pages/Setting/settingReduce'

export default combineReducers({
  Home,
  Setting
})
