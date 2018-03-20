const changeTabBarColor = (nextBackgroundColor) => {
  if (nextBackgroundColor === null) {
    return {
      type: 'CHANGE_NONE'
    }
  }
  return {
    type: 'CHANGE_BG_COLOR',
    payload: {
      nextBackgroundColor: nextBackgroundColor
    }
  }
}

export {
  changeTabBarColor
}
