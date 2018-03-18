const initialState = {
  backgroundColor: '#000'
}

export default (state = initialState, action) => {
  const backgroundColor = state.backgroundColor
  console.log(action)
  switch (action.type) {
    case 'CHANGE_TABBAR_BG_COLOR': {
      return {
        ...state,
        backgroundColor: action.payload.backgroundColor
      }
    }
    default: {
      return state
    }
  }
}
