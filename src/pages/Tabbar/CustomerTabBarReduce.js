const initialState = {
  prevBackgroundColor: 'rgba(0,0,0,1)',
  backgroundColor: 'rgba(0,0,0,1)'
}

export default (state = initialState, action) => {
  const prevBackgroundColor = state.backgroundColor
  switch (action.type) {
    case 'CHANGE_BG_COLOR': {
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
