
const initialState = {
  prevBackgroundColor: '#000',
  backgroundColor: '#000',
  searchBgColor: '#393f49',
  prevSearchBgColor: '#393f49'
}

export default (state = initialState, action) => {
  const prevBackgroundColor = state.backgroundColor
  const prevSearchBgColor = state.searchBgColor
  switch (action.type) {
    case 'CHANGE_TABBAR_BG_COLOR': {
      return {
        ...state,
        backgroundColor: action.payload.nextBackgroundColor,
        prevBackgroundColor: prevBackgroundColor,
        searchBgColor: action.payload.nextBackgroundColor,
        prevSearchBgColor: prevSearchBgColor
      }
    }
    default: {
      return state
    }
  }
}
