const changeTabBarColor = (nextBackgroundColor) => ({
  type: 'CHANGE_BG_COLOR',
  payload: {
    nextBackgroundColor: nextBackgroundColor
  }
})

export {
  changeTabBarColor
}
