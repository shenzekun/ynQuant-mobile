import { combineReducers } from 'redux'
import Tabbar from '../pages/Tabbar/CustomerTabBarReduce'
import Knowlege from '../pages/Knowedge/knowledgeRecuce'
import Login from '../pages/Login/loginReduce'
import Register from '../pages/Register/registerReduce'

export default combineReducers({
  Tabbar,
  Knowlege,
  Login,
  Register
})
