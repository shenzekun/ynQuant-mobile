const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase': {
      return {
        ...state,
        count: count + 1
      }
    }
    default: {
      return state
    }
  }
}
