const initialState = {
  prevBackgroundColor: '#000',
  backgroundColor: '#000'
}

export default (state = initialState, action) => {
  const prevBackgroundColor = state.backgroundColor
  switch (action.type) {
    case 'CHANGE_TABBAR_BG_COLOR': {
      return {
        ...state,
        backgroundColor: action.payload.nextBackgroundColor,
        prevBackgroundColor: prevBackgroundColor
      }
    }
    default: {
      return state
    }
  }
}
