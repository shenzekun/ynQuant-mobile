import { combineReducers } from 'redux'

import Home from '../pages/Home/homeReduce'
import Tabbar from '../pages/Tabbar/CustomerTabBarReduce'
import Knowlege from '../pages/Knowedge/knowledgeRecuce'

export default combineReducers({
  Home,
  Tabbar,
  Knowlege
})
