export const state = () => ({
  views: new Map()
})

export const getters = {
  views (state) {
    return (path) => {
      if (state.views.get(path) !== undefined) {
        return state.views.get(path)
      }
      return 0
    }
  }
}

export const mutations = {
  add_view (state, path) {
    if (path !== undefined) {
      let count = state.views.get(path)
      if (count !== undefined) {
        state.views.set(path, ++count)
      } else { state.views.set(path, 1) }
    }
  }

}
