const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase_home': {
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
